# `azurerm_media_streaming_policy`

Refer to the Terraform Registory for docs: [`azurerm_media_streaming_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy).

# `mediaStreamingPolicy` Submodule <a name="`mediaStreamingPolicy` Submodule" id="@cdktf/provider-azurerm.mediaStreamingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingPolicy <a name="MediaStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy azurerm_media_streaming_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicy;

MediaStreamingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .mediaServicesAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .commonEncryptionCbcs(MediaStreamingPolicyCommonEncryptionCbcs)
//  .commonEncryptionCenc(MediaStreamingPolicyCommonEncryptionCenc)
//  .defaultContentKeyPolicyName(java.lang.String)
//  .envelopeEncryption(MediaStreamingPolicyEnvelopeEncryption)
//  .id(java.lang.String)
//  .noEncryptionEnabledProtocols(MediaStreamingPolicyNoEncryptionEnabledProtocols)
//  .timeouts(MediaStreamingPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#name MediaStreamingPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCbcs">commonEncryptionCbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | common_encryption_cbcs block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCenc">commonEncryptionCenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | common_encryption_cenc block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.envelopeEncryption">envelopeEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | envelope_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#id MediaStreamingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.noEncryptionEnabledProtocols">noEncryptionEnabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | no_encryption_enabled_protocols block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#name MediaStreamingPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}.

---

##### `commonEncryptionCbcs`<sup>Optional</sup> <a name="commonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCbcs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

common_encryption_cbcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}

---

##### `commonEncryptionCenc`<sup>Optional</sup> <a name="commonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCenc"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

common_encryption_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}

---

##### `defaultContentKeyPolicyName`<sup>Optional</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.defaultContentKeyPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}.

---

##### `envelopeEncryption`<sup>Optional</sup> <a name="envelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.envelopeEncryption"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

envelope_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#envelope_encryption MediaStreamingPolicy#envelope_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#id MediaStreamingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noEncryptionEnabledProtocols`<sup>Optional</sup> <a name="noEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.noEncryptionEnabledProtocols"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

no_encryption_enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#timeouts MediaStreamingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs">putCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc">putCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putEnvelopeEncryption">putEnvelopeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols">putNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCbcs">resetCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCenc">resetCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetDefaultContentKeyPolicyName">resetDefaultContentKeyPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetEnvelopeEncryption">resetEnvelopeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetNoEncryptionEnabledProtocols">resetNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCommonEncryptionCbcs` <a name="putCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs"></a>

```java
public void putCommonEncryptionCbcs(MediaStreamingPolicyCommonEncryptionCbcs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---

##### `putCommonEncryptionCenc` <a name="putCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc"></a>

```java
public void putCommonEncryptionCenc(MediaStreamingPolicyCommonEncryptionCenc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---

##### `putEnvelopeEncryption` <a name="putEnvelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putEnvelopeEncryption"></a>

```java
public void putEnvelopeEncryption(MediaStreamingPolicyEnvelopeEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putEnvelopeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

---

##### `putNoEncryptionEnabledProtocols` <a name="putNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols"></a>

```java
public void putNoEncryptionEnabledProtocols(MediaStreamingPolicyNoEncryptionEnabledProtocols value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts"></a>

```java
public void putTimeouts(MediaStreamingPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

---

##### `resetCommonEncryptionCbcs` <a name="resetCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCbcs"></a>

```java
public void resetCommonEncryptionCbcs()
```

##### `resetCommonEncryptionCenc` <a name="resetCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCenc"></a>

```java
public void resetCommonEncryptionCenc()
```

##### `resetDefaultContentKeyPolicyName` <a name="resetDefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetDefaultContentKeyPolicyName"></a>

```java
public void resetDefaultContentKeyPolicyName()
```

##### `resetEnvelopeEncryption` <a name="resetEnvelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetEnvelopeEncryption"></a>

```java
public void resetEnvelopeEncryption()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetNoEncryptionEnabledProtocols` <a name="resetNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetNoEncryptionEnabledProtocols"></a>

```java
public void resetNoEncryptionEnabledProtocols()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaStreamingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicy;

MediaStreamingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicy;

MediaStreamingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicy;

MediaStreamingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicy;

MediaStreamingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaStreamingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaStreamingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaStreamingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaStreamingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaStreamingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcs">commonEncryptionCbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCenc">commonEncryptionCenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference">MediaStreamingPolicyCommonEncryptionCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryption">envelopeEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference">MediaStreamingPolicyEnvelopeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocols">noEncryptionEnabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference">MediaStreamingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcsInput">commonEncryptionCbcsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCencInput">commonEncryptionCencInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyNameInput">defaultContentKeyPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryptionInput">envelopeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocolsInput">noEncryptionEnabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commonEncryptionCbcs`<sup>Required</sup> <a name="commonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcs"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsOutputReference getCommonEncryptionCbcs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsOutputReference</a>

---

##### `commonEncryptionCenc`<sup>Required</sup> <a name="commonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCenc"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencOutputReference getCommonEncryptionCenc();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference">MediaStreamingPolicyCommonEncryptionCencOutputReference</a>

---

##### `envelopeEncryption`<sup>Required</sup> <a name="envelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryption"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionOutputReference getEnvelopeEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference">MediaStreamingPolicyEnvelopeEncryptionOutputReference</a>

---

##### `noEncryptionEnabledProtocols`<sup>Required</sup> <a name="noEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocols"></a>

```java
public MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference getNoEncryptionEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeouts"></a>

```java
public MediaStreamingPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference">MediaStreamingPolicyTimeoutsOutputReference</a>

---

##### `commonEncryptionCbcsInput`<sup>Optional</sup> <a name="commonEncryptionCbcsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcsInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcs getCommonEncryptionCbcsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---

##### `commonEncryptionCencInput`<sup>Optional</sup> <a name="commonEncryptionCencInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCencInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCenc getCommonEncryptionCencInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---

##### `defaultContentKeyPolicyNameInput`<sup>Optional</sup> <a name="defaultContentKeyPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyNameInput"></a>

```java
public java.lang.String getDefaultContentKeyPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `envelopeEncryptionInput`<sup>Optional</sup> <a name="envelopeEncryptionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryptionInput"></a>

```java
public MediaStreamingPolicyEnvelopeEncryption getEnvelopeEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountNameInput"></a>

```java
public java.lang.String getMediaServicesAccountNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `noEncryptionEnabledProtocolsInput`<sup>Optional</sup> <a name="noEncryptionEnabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocolsInput"></a>

```java
public MediaStreamingPolicyNoEncryptionEnabledProtocols getNoEncryptionEnabledProtocolsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

---

##### `defaultContentKeyPolicyName`<sup>Required</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyName"></a>

```java
public java.lang.String getDefaultContentKeyPolicyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountName"></a>

```java
public java.lang.String getMediaServicesAccountName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingPolicyCommonEncryptionCbcs <a name="MediaStreamingPolicyCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcs;

MediaStreamingPolicyCommonEncryptionCbcs.builder()
//  .clearKeyEncryption(MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption)
//  .defaultContentKey(MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey)
//  .drmFairplay(MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay)
//  .enabledProtocols(MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a></code> | clear_key_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.drmFairplay">drmFairplay</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | drm_fairplay block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `clearKeyEncryption`<sup>Optional</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.clearKeyEncryption"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption getClearKeyEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

clear_key_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#clear_key_encryption MediaStreamingPolicy#clear_key_encryption}

---

##### `defaultContentKey`<sup>Optional</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.defaultContentKey"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey getDefaultContentKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `drmFairplay`<sup>Optional</sup> <a name="drmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.drmFairplay"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay getDrmFairplay();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

drm_fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#drm_fairplay MediaStreamingPolicy#drm_fairplay}

---

##### `enabledProtocols`<sup>Optional</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.enabledProtocols"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols getEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption <a name="MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption;

MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.builder()
    .customKeysAcquisitionUrlTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}. |

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.property.customKeysAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey <a name="MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey;

MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.builder()
//  .label(java.lang.String)
//  .policyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay <a name="MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay;

MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.builder()
//  .allowPersistentLicense(java.lang.Boolean)
//  .allowPersistentLicense(IResolvable)
//  .customLicenseAcquisitionUrlTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.allowPersistentLicense">allowPersistentLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}. |

---

##### `allowPersistentLicense`<sup>Optional</sup> <a name="allowPersistentLicense" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.allowPersistentLicense"></a>

```java
public java.lang.Object getAllowPersistentLicense();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}.

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.customLicenseAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomLicenseAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols <a name="MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols;

MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.builder()
//  .dash(java.lang.Boolean)
//  .dash(IResolvable)
//  .download(java.lang.Boolean)
//  .download(IResolvable)
//  .hls(java.lang.Boolean)
//  .hls(IResolvable)
//  .smoothStreaming(java.lang.Boolean)
//  .smoothStreaming(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyCommonEncryptionCenc <a name="MediaStreamingPolicyCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCenc;

MediaStreamingPolicyCommonEncryptionCenc.builder()
//  .clearKeyEncryption(MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption)
//  .clearTrack(IResolvable)
//  .clearTrack(java.util.List<MediaStreamingPolicyCommonEncryptionCencClearTrack>)
//  .contentKeyToTrackMapping(IResolvable)
//  .contentKeyToTrackMapping(java.util.List<MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping>)
//  .defaultContentKey(MediaStreamingPolicyCommonEncryptionCencDefaultContentKey)
//  .drmPlayready(MediaStreamingPolicyCommonEncryptionCencDrmPlayready)
//  .drmWidevineCustomLicenseAcquisitionUrlTemplate(java.lang.String)
//  .enabledProtocols(MediaStreamingPolicyCommonEncryptionCencEnabledProtocols)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a></code> | clear_key_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearTrack">clearTrack</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>></code> | clear_track block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.contentKeyToTrackMapping">contentKeyToTrackMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>></code> | content_key_to_track_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmPlayready">drmPlayready</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | drm_playready block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmWidevineCustomLicenseAcquisitionUrlTemplate">drmWidevineCustomLicenseAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `clearKeyEncryption`<sup>Optional</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearKeyEncryption"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption getClearKeyEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

clear_key_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#clear_key_encryption MediaStreamingPolicy#clear_key_encryption}

---

##### `clearTrack`<sup>Optional</sup> <a name="clearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearTrack"></a>

```java
public java.lang.Object getClearTrack();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>>

clear_track block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#clear_track MediaStreamingPolicy#clear_track}

---

##### `contentKeyToTrackMapping`<sup>Optional</sup> <a name="contentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.contentKeyToTrackMapping"></a>

```java
public java.lang.Object getContentKeyToTrackMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>>

content_key_to_track_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#content_key_to_track_mapping MediaStreamingPolicy#content_key_to_track_mapping}

---

##### `defaultContentKey`<sup>Optional</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.defaultContentKey"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDefaultContentKey getDefaultContentKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `drmPlayready`<sup>Optional</sup> <a name="drmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmPlayready"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDrmPlayready getDrmPlayready();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

drm_playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#drm_playready MediaStreamingPolicy#drm_playready}

---

##### `drmWidevineCustomLicenseAcquisitionUrlTemplate`<sup>Optional</sup> <a name="drmWidevineCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```java
public java.lang.String getDrmWidevineCustomLicenseAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}.

---

##### `enabledProtocols`<sup>Optional</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.enabledProtocols"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencEnabledProtocols getEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption <a name="MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption;

MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.builder()
    .customKeysAcquisitionUrlTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}. |

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.property.customKeysAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCencClearTrack <a name="MediaStreamingPolicyCommonEncryptionCencClearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearTrack;

MediaStreamingPolicyCommonEncryptionCencClearTrack.builder()
    .condition(IResolvable)
    .condition(java.util.List<MediaStreamingPolicyCommonEncryptionCencClearTrackCondition>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#condition MediaStreamingPolicy#condition}

---

### MediaStreamingPolicyCommonEncryptionCencClearTrackCondition <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition;

MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.builder()
    .operation(java.lang.String)
    .property(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.property">property</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}.

---

### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping;

MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.builder()
    .track(IResolvable)
    .track(java.util.List<MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack>)
//  .label(java.lang.String)
//  .policyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.track">track</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>></code> | track block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `track`<sup>Required</sup> <a name="track" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.track"></a>

```java
public java.lang.Object getTrack();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>>

track block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#track MediaStreamingPolicy#track}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack;

MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.builder()
    .condition(IResolvable)
    .condition(java.util.List<MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#condition MediaStreamingPolicy#condition}

---

### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition;

MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.builder()
    .operation(java.lang.String)
    .property(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.property">property</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}.

---

### MediaStreamingPolicyCommonEncryptionCencDefaultContentKey <a name="MediaStreamingPolicyCommonEncryptionCencDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey;

MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.builder()
//  .label(java.lang.String)
//  .policyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCencDrmPlayready <a name="MediaStreamingPolicyCommonEncryptionCencDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready;

MediaStreamingPolicyCommonEncryptionCencDrmPlayready.builder()
//  .customAttributes(java.lang.String)
//  .customLicenseAcquisitionUrlTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customAttributes">customAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}. |

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customAttributes"></a>

```java
public java.lang.String getCustomAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}.

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customLicenseAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomLicenseAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCencEnabledProtocols <a name="MediaStreamingPolicyCommonEncryptionCencEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols;

MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.builder()
//  .dash(java.lang.Boolean)
//  .dash(IResolvable)
//  .download(java.lang.Boolean)
//  .download(IResolvable)
//  .hls(java.lang.Boolean)
//  .hls(IResolvable)
//  .smoothStreaming(java.lang.Boolean)
//  .smoothStreaming(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyConfig <a name="MediaStreamingPolicyConfig" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyConfig;

MediaStreamingPolicyConfig.builder()
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
    .mediaServicesAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .commonEncryptionCbcs(MediaStreamingPolicyCommonEncryptionCbcs)
//  .commonEncryptionCenc(MediaStreamingPolicyCommonEncryptionCenc)
//  .defaultContentKeyPolicyName(java.lang.String)
//  .envelopeEncryption(MediaStreamingPolicyEnvelopeEncryption)
//  .id(java.lang.String)
//  .noEncryptionEnabledProtocols(MediaStreamingPolicyNoEncryptionEnabledProtocols)
//  .timeouts(MediaStreamingPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#name MediaStreamingPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCbcs">commonEncryptionCbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | common_encryption_cbcs block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCenc">commonEncryptionCenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | common_encryption_cenc block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.envelopeEncryption">envelopeEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | envelope_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#id MediaStreamingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.noEncryptionEnabledProtocols">noEncryptionEnabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | no_encryption_enabled_protocols block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.mediaServicesAccountName"></a>

```java
public java.lang.String getMediaServicesAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#name MediaStreamingPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}.

---

##### `commonEncryptionCbcs`<sup>Optional</sup> <a name="commonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCbcs"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcs getCommonEncryptionCbcs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

common_encryption_cbcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}

---

##### `commonEncryptionCenc`<sup>Optional</sup> <a name="commonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCenc"></a>

```java
public MediaStreamingPolicyCommonEncryptionCenc getCommonEncryptionCenc();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

common_encryption_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}

---

##### `defaultContentKeyPolicyName`<sup>Optional</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.defaultContentKeyPolicyName"></a>

```java
public java.lang.String getDefaultContentKeyPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}.

---

##### `envelopeEncryption`<sup>Optional</sup> <a name="envelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.envelopeEncryption"></a>

```java
public MediaStreamingPolicyEnvelopeEncryption getEnvelopeEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

envelope_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#envelope_encryption MediaStreamingPolicy#envelope_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#id MediaStreamingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noEncryptionEnabledProtocols`<sup>Optional</sup> <a name="noEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.noEncryptionEnabledProtocols"></a>

```java
public MediaStreamingPolicyNoEncryptionEnabledProtocols getNoEncryptionEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

no_encryption_enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.timeouts"></a>

```java
public MediaStreamingPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#timeouts MediaStreamingPolicy#timeouts}

---

### MediaStreamingPolicyEnvelopeEncryption <a name="MediaStreamingPolicyEnvelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyEnvelopeEncryption;

MediaStreamingPolicyEnvelopeEncryption.builder()
//  .customKeysAcquisitionUrlTemplate(java.lang.String)
//  .defaultContentKey(MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey)
//  .enabledProtocols(MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `customKeysAcquisitionUrlTemplate`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.customKeysAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}.

---

##### `defaultContentKey`<sup>Optional</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.defaultContentKey"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey getDefaultContentKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `enabledProtocols`<sup>Optional</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.enabledProtocols"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols getEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey <a name="MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey;

MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.builder()
//  .label(java.lang.String)
//  .policyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols <a name="MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols;

MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.builder()
//  .dash(java.lang.Boolean)
//  .dash(IResolvable)
//  .download(java.lang.Boolean)
//  .download(IResolvable)
//  .hls(java.lang.Boolean)
//  .hls(IResolvable)
//  .smoothStreaming(java.lang.Boolean)
//  .smoothStreaming(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyNoEncryptionEnabledProtocols <a name="MediaStreamingPolicyNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyNoEncryptionEnabledProtocols;

MediaStreamingPolicyNoEncryptionEnabledProtocols.builder()
//  .dash(java.lang.Boolean)
//  .dash(IResolvable)
//  .download(java.lang.Boolean)
//  .download(IResolvable)
//  .hls(java.lang.Boolean)
//  .hls(IResolvable)
//  .smoothStreaming(java.lang.Boolean)
//  .smoothStreaming(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyTimeouts <a name="MediaStreamingPolicyTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyTimeouts;

MediaStreamingPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#create MediaStreamingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#delete MediaStreamingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#read MediaStreamingPolicy#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#create MediaStreamingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#delete MediaStreamingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_policy#read MediaStreamingPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference;

new MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput">customKeysAcquisitionUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customKeysAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference;

new MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference;

new MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetAllowPersistentLicense">resetAllowPersistentLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetCustomLicenseAcquisitionUrlTemplate">resetCustomLicenseAcquisitionUrlTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowPersistentLicense` <a name="resetAllowPersistentLicense" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetAllowPersistentLicense"></a>

```java
public void resetAllowPersistentLicense()
```

##### `resetCustomLicenseAcquisitionUrlTemplate` <a name="resetCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetCustomLicenseAcquisitionUrlTemplate"></a>

```java
public void resetCustomLicenseAcquisitionUrlTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicenseInput">allowPersistentLicenseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplateInput">customLicenseAcquisitionUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicense">allowPersistentLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowPersistentLicenseInput`<sup>Optional</sup> <a name="allowPersistentLicenseInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicenseInput"></a>

```java
public java.lang.Object getAllowPersistentLicenseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customLicenseAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplateInput"></a>

```java
public java.lang.String getCustomLicenseAcquisitionUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `allowPersistentLicense`<sup>Required</sup> <a name="allowPersistentLicense" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicense"></a>

```java
public java.lang.Object getAllowPersistentLicense();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Required</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomLicenseAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference;

new MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDash"></a>

```java
public void resetDash()
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDownload"></a>

```java
public void resetDownload()
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetHls"></a>

```java
public void resetHls()
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```java
public void resetSmoothStreaming()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dashInput"></a>

```java
public java.lang.Object getDashInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.downloadInput"></a>

```java
public java.lang.Object getDownloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hlsInput"></a>

```java
public java.lang.Object getHlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```java
public java.lang.Object getSmoothStreamingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference;

new MediaStreamingPolicyCommonEncryptionCbcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putClearKeyEncryption">putClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey">putDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay">putDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols">putEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetClearKeyEncryption">resetClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDefaultContentKey">resetDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDrmFairplay">resetDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetEnabledProtocols">resetEnabledProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClearKeyEncryption` <a name="putClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putClearKeyEncryption"></a>

```java
public void putClearKeyEncryption(MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putClearKeyEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

---

##### `putDefaultContentKey` <a name="putDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey"></a>

```java
public void putDefaultContentKey(MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---

##### `putDrmFairplay` <a name="putDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay"></a>

```java
public void putDrmFairplay(MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---

##### `putEnabledProtocols` <a name="putEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols"></a>

```java
public void putEnabledProtocols(MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---

##### `resetClearKeyEncryption` <a name="resetClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetClearKeyEncryption"></a>

```java
public void resetClearKeyEncryption()
```

##### `resetDefaultContentKey` <a name="resetDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDefaultContentKey"></a>

```java
public void resetDefaultContentKey()
```

##### `resetDrmFairplay` <a name="resetDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDrmFairplay"></a>

```java
public void resetDrmFairplay()
```

##### `resetEnabledProtocols` <a name="resetEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetEnabledProtocols"></a>

```java
public void resetEnabledProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplay">drmFairplay</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryptionInput">clearKeyEncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKeyInput">defaultContentKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplayInput">drmFairplayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocolsInput">enabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clearKeyEncryption`<sup>Required</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryption"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference getClearKeyEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference</a>

---

##### `defaultContentKey`<sup>Required</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKey"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference getDefaultContentKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference</a>

---

##### `drmFairplay`<sup>Required</sup> <a name="drmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplay"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference getDrmFairplay();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference</a>

---

##### `enabledProtocols`<sup>Required</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocols"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference getEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference</a>

---

##### `clearKeyEncryptionInput`<sup>Optional</sup> <a name="clearKeyEncryptionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryptionInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption getClearKeyEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

---

##### `defaultContentKeyInput`<sup>Optional</sup> <a name="defaultContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKeyInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey getDefaultContentKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---

##### `drmFairplayInput`<sup>Optional</sup> <a name="drmFairplayInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplayInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay getDrmFairplayInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---

##### `enabledProtocolsInput`<sup>Optional</sup> <a name="enabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocolsInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols getEnabledProtocolsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCbcs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---


### MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference;

new MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput">customKeysAcquisitionUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customKeysAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList;

new MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.get"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>>

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference;

new MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.property">property</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.propertyInput"></a>

```java
public java.lang.String getPropertyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackList <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearTrackList;

new MediaStreamingPolicyCommonEncryptionCencClearTrackList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.get"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>>

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference;

new MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<MediaStreamingPolicyCommonEncryptionCencClearTrackCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList">MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.condition"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList">MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList;

new MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.get"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>>

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference;

new MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.putTrack">putTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrack` <a name="putTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.putTrack"></a>

```java
public void putTrack(IResolvable OR java.util.List<MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.putTrack.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>>

---

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.track">track</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.trackInput">trackInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `track`<sup>Required</sup> <a name="track" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.track"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList getTrack();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList</a>

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `trackInput`<sup>Optional</sup> <a name="trackInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.trackInput"></a>

```java
public java.lang.Object getTrackInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList;

new MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.get"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>>

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference;

new MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.property">property</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.propertyInput"></a>

```java
public java.lang.String getPropertyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList;

new MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.get"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>>

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference;

new MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.condition"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>

---


### MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference;

new MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDefaultContentKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---


### MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference;

new MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomLicenseAcquisitionUrlTemplate">resetCustomLicenseAcquisitionUrlTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetCustomLicenseAcquisitionUrlTemplate` <a name="resetCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomLicenseAcquisitionUrlTemplate"></a>

```java
public void resetCustomLicenseAcquisitionUrlTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplateInput">customLicenseAcquisitionUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributes">customAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributesInput"></a>

```java
public java.lang.String getCustomAttributesInput();
```

- *Type:* java.lang.String

---

##### `customLicenseAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplateInput"></a>

```java
public java.lang.String getCustomLicenseAcquisitionUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributes"></a>

```java
public java.lang.String getCustomAttributes();
```

- *Type:* java.lang.String

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Required</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomLicenseAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDrmPlayready getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---


### MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference;

new MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDash"></a>

```java
public void resetDash()
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDownload"></a>

```java
public void resetDownload()
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetHls"></a>

```java
public void resetHls()
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```java
public void resetSmoothStreaming()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dashInput"></a>

```java
public java.lang.Object getDashInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.downloadInput"></a>

```java
public java.lang.Object getDownloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hlsInput"></a>

```java
public java.lang.Object getHlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```java
public java.lang.Object getSmoothStreamingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencEnabledProtocols getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---


### MediaStreamingPolicyCommonEncryptionCencOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyCommonEncryptionCencOutputReference;

new MediaStreamingPolicyCommonEncryptionCencOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearKeyEncryption">putClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearTrack">putClearTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putContentKeyToTrackMapping">putContentKeyToTrackMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey">putDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready">putDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols">putEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearKeyEncryption">resetClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearTrack">resetClearTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetContentKeyToTrackMapping">resetContentKeyToTrackMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDefaultContentKey">resetDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmPlayready">resetDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmWidevineCustomLicenseAcquisitionUrlTemplate">resetDrmWidevineCustomLicenseAcquisitionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetEnabledProtocols">resetEnabledProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClearKeyEncryption` <a name="putClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearKeyEncryption"></a>

```java
public void putClearKeyEncryption(MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearKeyEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

---

##### `putClearTrack` <a name="putClearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearTrack"></a>

```java
public void putClearTrack(IResolvable OR java.util.List<MediaStreamingPolicyCommonEncryptionCencClearTrack> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearTrack.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>>

---

##### `putContentKeyToTrackMapping` <a name="putContentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putContentKeyToTrackMapping"></a>

```java
public void putContentKeyToTrackMapping(IResolvable OR java.util.List<MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putContentKeyToTrackMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>>

---

##### `putDefaultContentKey` <a name="putDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey"></a>

```java
public void putDefaultContentKey(MediaStreamingPolicyCommonEncryptionCencDefaultContentKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---

##### `putDrmPlayready` <a name="putDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready"></a>

```java
public void putDrmPlayready(MediaStreamingPolicyCommonEncryptionCencDrmPlayready value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---

##### `putEnabledProtocols` <a name="putEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols"></a>

```java
public void putEnabledProtocols(MediaStreamingPolicyCommonEncryptionCencEnabledProtocols value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---

##### `resetClearKeyEncryption` <a name="resetClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearKeyEncryption"></a>

```java
public void resetClearKeyEncryption()
```

##### `resetClearTrack` <a name="resetClearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearTrack"></a>

```java
public void resetClearTrack()
```

##### `resetContentKeyToTrackMapping` <a name="resetContentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetContentKeyToTrackMapping"></a>

```java
public void resetContentKeyToTrackMapping()
```

##### `resetDefaultContentKey` <a name="resetDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDefaultContentKey"></a>

```java
public void resetDefaultContentKey()
```

##### `resetDrmPlayready` <a name="resetDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmPlayready"></a>

```java
public void resetDrmPlayready()
```

##### `resetDrmWidevineCustomLicenseAcquisitionUrlTemplate` <a name="resetDrmWidevineCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```java
public void resetDrmWidevineCustomLicenseAcquisitionUrlTemplate()
```

##### `resetEnabledProtocols` <a name="resetEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetEnabledProtocols"></a>

```java
public void resetEnabledProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrack">clearTrack</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList">MediaStreamingPolicyCommonEncryptionCencClearTrackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMapping">contentKeyToTrackMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayready">drmPlayready</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference">MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryptionInput">clearKeyEncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrackInput">clearTrackInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMappingInput">contentKeyToTrackMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKeyInput">defaultContentKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayreadyInput">drmPlayreadyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplateInput">drmWidevineCustomLicenseAcquisitionUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocolsInput">enabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplate">drmWidevineCustomLicenseAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clearKeyEncryption`<sup>Required</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryption"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference getClearKeyEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference</a>

---

##### `clearTrack`<sup>Required</sup> <a name="clearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrack"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearTrackList getClearTrack();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList">MediaStreamingPolicyCommonEncryptionCencClearTrackList</a>

---

##### `contentKeyToTrackMapping`<sup>Required</sup> <a name="contentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMapping"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList getContentKeyToTrackMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList</a>

---

##### `defaultContentKey`<sup>Required</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKey"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference getDefaultContentKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference</a>

---

##### `drmPlayready`<sup>Required</sup> <a name="drmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayready"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference getDrmPlayready();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference">MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference</a>

---

##### `enabledProtocols`<sup>Required</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocols"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference getEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference</a>

---

##### `clearKeyEncryptionInput`<sup>Optional</sup> <a name="clearKeyEncryptionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryptionInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption getClearKeyEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

---

##### `clearTrackInput`<sup>Optional</sup> <a name="clearTrackInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrackInput"></a>

```java
public java.lang.Object getClearTrackInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>>

---

##### `contentKeyToTrackMappingInput`<sup>Optional</sup> <a name="contentKeyToTrackMappingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMappingInput"></a>

```java
public java.lang.Object getContentKeyToTrackMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>>

---

##### `defaultContentKeyInput`<sup>Optional</sup> <a name="defaultContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKeyInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDefaultContentKey getDefaultContentKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---

##### `drmPlayreadyInput`<sup>Optional</sup> <a name="drmPlayreadyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayreadyInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencDrmPlayready getDrmPlayreadyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---

##### `drmWidevineCustomLicenseAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="drmWidevineCustomLicenseAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplateInput"></a>

```java
public java.lang.String getDrmWidevineCustomLicenseAcquisitionUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `enabledProtocolsInput`<sup>Optional</sup> <a name="enabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocolsInput"></a>

```java
public MediaStreamingPolicyCommonEncryptionCencEnabledProtocols getEnabledProtocolsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---

##### `drmWidevineCustomLicenseAcquisitionUrlTemplate`<sup>Required</sup> <a name="drmWidevineCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```java
public java.lang.String getDrmWidevineCustomLicenseAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyCommonEncryptionCenc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---


### MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference <a name="MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference;

new MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

---


### MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference <a name="MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference;

new MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDash"></a>

```java
public void resetDash()
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDownload"></a>

```java
public void resetDownload()
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetHls"></a>

```java
public void resetHls()
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```java
public void resetSmoothStreaming()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dashInput"></a>

```java
public java.lang.Object getDashInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.downloadInput"></a>

```java
public java.lang.Object getDownloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hlsInput"></a>

```java
public java.lang.Object getHlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```java
public java.lang.Object getSmoothStreamingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

---


### MediaStreamingPolicyEnvelopeEncryptionOutputReference <a name="MediaStreamingPolicyEnvelopeEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyEnvelopeEncryptionOutputReference;

new MediaStreamingPolicyEnvelopeEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putDefaultContentKey">putDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putEnabledProtocols">putEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetCustomKeysAcquisitionUrlTemplate">resetCustomKeysAcquisitionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetDefaultContentKey">resetDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetEnabledProtocols">resetEnabledProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultContentKey` <a name="putDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putDefaultContentKey"></a>

```java
public void putDefaultContentKey(MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putDefaultContentKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

---

##### `putEnabledProtocols` <a name="putEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putEnabledProtocols"></a>

```java
public void putEnabledProtocols(MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

---

##### `resetCustomKeysAcquisitionUrlTemplate` <a name="resetCustomKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetCustomKeysAcquisitionUrlTemplate"></a>

```java
public void resetCustomKeysAcquisitionUrlTemplate()
```

##### `resetDefaultContentKey` <a name="resetDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetDefaultContentKey"></a>

```java
public void resetDefaultContentKey()
```

##### `resetEnabledProtocols` <a name="resetEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetEnabledProtocols"></a>

```java
public void resetEnabledProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput">customKeysAcquisitionUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKeyInput">defaultContentKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocolsInput">enabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultContentKey`<sup>Required</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKey"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference getDefaultContentKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference</a>

---

##### `enabledProtocols`<sup>Required</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocols"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference getEnabledProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference</a>

---

##### `customKeysAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `defaultContentKeyInput`<sup>Optional</sup> <a name="defaultContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKeyInput"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey getDefaultContentKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

---

##### `enabledProtocolsInput`<sup>Optional</sup> <a name="enabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocolsInput"></a>

```java
public MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols getEnabledProtocolsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate"></a>

```java
public java.lang.String getCustomKeysAcquisitionUrlTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyEnvelopeEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

---


### MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference <a name="MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference;

new MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDash"></a>

```java
public void resetDash()
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDownload"></a>

```java
public void resetDownload()
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetHls"></a>

```java
public void resetHls()
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```java
public void resetSmoothStreaming()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.download">download</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dashInput"></a>

```java
public java.lang.Object getDashInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.downloadInput"></a>

```java
public java.lang.Object getDownloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hlsInput"></a>

```java
public java.lang.Object getHlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```java
public java.lang.Object getSmoothStreamingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dash"></a>

```java
public java.lang.Object getDash();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.download"></a>

```java
public java.lang.Object getDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hls"></a>

```java
public java.lang.Object getHls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```java
public java.lang.Object getSmoothStreaming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.internalValue"></a>

```java
public MediaStreamingPolicyNoEncryptionEnabledProtocols getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---


### MediaStreamingPolicyTimeoutsOutputReference <a name="MediaStreamingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_policy.MediaStreamingPolicyTimeoutsOutputReference;

new MediaStreamingPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

---



