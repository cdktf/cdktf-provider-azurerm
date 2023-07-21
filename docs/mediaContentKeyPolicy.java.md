# `azurerm_media_content_key_policy`

Refer to the Terraform Registory for docs: [`azurerm_media_content_key_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy).

# `mediaContentKeyPolicy` Submodule <a name="`mediaContentKeyPolicy` Submodule" id="@cdktf/provider-azurerm.mediaContentKeyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaContentKeyPolicy <a name="MediaContentKeyPolicy" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy azurerm_media_content_key_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicy;

MediaContentKeyPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .policyOption(IResolvable)
    .policyOption(java.util.List<MediaContentKeyPolicyPolicyOption>)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MediaContentKeyPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.policyOption">policyOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>></code> | policy_option block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `policyOption`<sup>Required</sup> <a name="policyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.policyOption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>>

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption">putPolicyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPolicyOption` <a name="putPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption"></a>

```java
public void putPolicyOption(IResolvable OR java.util.List<MediaContentKeyPolicyPolicyOption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts"></a>

```java
public void putTimeouts(MediaContentKeyPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicy;

MediaContentKeyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicy;

MediaContentKeyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicy;

MediaContentKeyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption">policyOption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput">policyOptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyOption`<sup>Required</sup> <a name="policyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption"></a>

```java
public MediaContentKeyPolicyPolicyOptionList getPolicyOption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts"></a>

```java
public MediaContentKeyPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput"></a>

```java
public java.lang.String getMediaServicesAccountNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyOptionInput`<sup>Optional</sup> <a name="policyOptionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput"></a>

```java
public java.lang.Object getPolicyOptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName"></a>

```java
public java.lang.String getMediaServicesAccountName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaContentKeyPolicyConfig <a name="MediaContentKeyPolicyConfig" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyConfig;

MediaContentKeyPolicyConfig.builder()
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
    .policyOption(IResolvable)
    .policyOption(java.util.List<MediaContentKeyPolicyPolicyOption>)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MediaContentKeyPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption">policyOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>></code> | policy_option block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName"></a>

```java
public java.lang.String getMediaServicesAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `policyOption`<sup>Required</sup> <a name="policyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption"></a>

```java
public java.lang.Object getPolicyOption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>>

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts"></a>

```java
public MediaContentKeyPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}

---

### MediaContentKeyPolicyPolicyOption <a name="MediaContentKeyPolicyPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOption;

MediaContentKeyPolicyPolicyOption.builder()
    .name(java.lang.String)
//  .clearKeyConfigurationEnabled(java.lang.Boolean)
//  .clearKeyConfigurationEnabled(IResolvable)
//  .fairplayConfiguration(MediaContentKeyPolicyPolicyOptionFairplayConfiguration)
//  .openRestrictionEnabled(java.lang.Boolean)
//  .openRestrictionEnabled(IResolvable)
//  .playreadyConfigurationLicense(IResolvable)
//  .playreadyConfigurationLicense(java.util.List<MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense>)
//  .playreadyResponseCustomData(java.lang.String)
//  .tokenRestriction(MediaContentKeyPolicyPolicyOptionTokenRestriction)
//  .widevineConfigurationTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled">clearKeyConfigurationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration">fairplayConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | fairplay_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled">openRestrictionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense">playreadyConfigurationLicense</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>></code> | playready_configuration_license block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData">playreadyResponseCustomData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction">tokenRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | token_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate">widevineConfigurationTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `clearKeyConfigurationEnabled`<sup>Optional</sup> <a name="clearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled"></a>

```java
public java.lang.Object getClearKeyConfigurationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}.

---

##### `fairplayConfiguration`<sup>Optional</sup> <a name="fairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfiguration getFairplayConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

fairplay_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#fairplay_configuration MediaContentKeyPolicy#fairplay_configuration}

---

##### `openRestrictionEnabled`<sup>Optional</sup> <a name="openRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled"></a>

```java
public java.lang.Object getOpenRestrictionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}.

---

##### `playreadyConfigurationLicense`<sup>Optional</sup> <a name="playreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense"></a>

```java
public java.lang.Object getPlayreadyConfigurationLicense();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>>

playready_configuration_license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#playready_configuration_license MediaContentKeyPolicy#playready_configuration_license}

---

##### `playreadyResponseCustomData`<sup>Optional</sup> <a name="playreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData"></a>

```java
public java.lang.String getPlayreadyResponseCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}.

---

##### `tokenRestriction`<sup>Optional</sup> <a name="tokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestriction getTokenRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

token_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#token_restriction MediaContentKeyPolicy#token_restriction}

---

##### `widevineConfigurationTemplate`<sup>Optional</sup> <a name="widevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate"></a>

```java
public java.lang.String getWidevineConfigurationTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration;

MediaContentKeyPolicyPolicyOptionFairplayConfiguration.builder()
//  .ask(java.lang.String)
//  .offlineRentalConfiguration(MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration)
//  .pfx(java.lang.String)
//  .pfxPassword(java.lang.String)
//  .rentalAndLeaseKeyType(java.lang.String)
//  .rentalDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask">ask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration">offlineRentalConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | offline_rental_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx">pfx</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword">pfxPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType">rentalAndLeaseKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds">rentalDurationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}. |

---

##### `ask`<sup>Optional</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask"></a>

```java
public java.lang.String getAsk();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}.

---

##### `offlineRentalConfiguration`<sup>Optional</sup> <a name="offlineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration getOfflineRentalConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

offline_rental_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}

---

##### `pfx`<sup>Optional</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx"></a>

```java
public java.lang.String getPfx();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}.

---

##### `pfxPassword`<sup>Optional</sup> <a name="pfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword"></a>

```java
public java.lang.String getPfxPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}.

---

##### `rentalAndLeaseKeyType`<sup>Optional</sup> <a name="rentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType"></a>

```java
public java.lang.String getRentalAndLeaseKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}.

---

##### `rentalDurationSeconds`<sup>Optional</sup> <a name="rentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds"></a>

```java
public java.lang.Number getRentalDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration;

MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.builder()
//  .playbackDurationSeconds(java.lang.Number)
//  .storageDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds">playbackDurationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds">storageDurationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}. |

---

##### `playbackDurationSeconds`<sup>Optional</sup> <a name="playbackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds"></a>

```java
public java.lang.Number getPlaybackDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}.

---

##### `storageDurationSeconds`<sup>Optional</sup> <a name="storageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds"></a>

```java
public java.lang.Number getStorageDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense;

MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.builder()
//  .allowTestDevices(java.lang.Boolean)
//  .allowTestDevices(IResolvable)
//  .beginDate(java.lang.String)
//  .contentKeyLocationFromHeaderEnabled(java.lang.Boolean)
//  .contentKeyLocationFromHeaderEnabled(IResolvable)
//  .contentKeyLocationFromKeyId(java.lang.String)
//  .contentType(java.lang.String)
//  .expirationDate(java.lang.String)
//  .gracePeriod(java.lang.String)
//  .licenseType(java.lang.String)
//  .playRight(MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight)
//  .relativeBeginDate(java.lang.String)
//  .relativeExpirationDate(java.lang.String)
//  .securityLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices">allowTestDevices</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate">beginDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled">contentKeyLocationFromHeaderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId">contentKeyLocationFromKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight">playRight</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | play_right block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate">relativeBeginDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate">relativeExpirationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}. |

---

##### `allowTestDevices`<sup>Optional</sup> <a name="allowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices"></a>

```java
public java.lang.Object getAllowTestDevices();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}.

---

##### `beginDate`<sup>Optional</sup> <a name="beginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate"></a>

```java
public java.lang.String getBeginDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}.

---

##### `contentKeyLocationFromHeaderEnabled`<sup>Optional</sup> <a name="contentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled"></a>

```java
public java.lang.Object getContentKeyLocationFromHeaderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}.

---

##### `contentKeyLocationFromKeyId`<sup>Optional</sup> <a name="contentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId"></a>

```java
public java.lang.String getContentKeyLocationFromKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod"></a>

```java
public java.lang.String getGracePeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}.

---

##### `playRight`<sup>Optional</sup> <a name="playRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight getPlayRight();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

play_right block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#play_right MediaContentKeyPolicy#play_right}

---

##### `relativeBeginDate`<sup>Optional</sup> <a name="relativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate"></a>

```java
public java.lang.String getRelativeBeginDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}.

---

##### `relativeExpirationDate`<sup>Optional</sup> <a name="relativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate"></a>

```java
public java.lang.String getRelativeExpirationDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}.

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight;

MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.builder()
//  .agcAndColorStripeRestriction(java.lang.Number)
//  .allowPassingVideoContentToUnknownOutput(java.lang.String)
//  .analogVideoOpl(java.lang.Number)
//  .compressedDigitalAudioOpl(java.lang.Number)
//  .compressedDigitalVideoOpl(java.lang.Number)
//  .digitalVideoOnlyContentRestriction(java.lang.Boolean)
//  .digitalVideoOnlyContentRestriction(IResolvable)
//  .explicitAnalogTelevisionOutputRestriction(MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction)
//  .firstPlayExpiration(java.lang.String)
//  .imageConstraintForAnalogComponentVideoRestriction(java.lang.Boolean)
//  .imageConstraintForAnalogComponentVideoRestriction(IResolvable)
//  .imageConstraintForAnalogComputerMonitorRestriction(java.lang.Boolean)
//  .imageConstraintForAnalogComputerMonitorRestriction(IResolvable)
//  .scmsRestriction(java.lang.Number)
//  .uncompressedDigitalAudioOpl(java.lang.Number)
//  .uncompressedDigitalVideoOpl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction">agcAndColorStripeRestriction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput">allowPassingVideoContentToUnknownOutput</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl">analogVideoOpl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl">compressedDigitalAudioOpl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl">compressedDigitalVideoOpl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction">digitalVideoOnlyContentRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction">explicitAnalogTelevisionOutputRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | explicit_analog_television_output_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration">firstPlayExpiration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction">imageConstraintForAnalogComponentVideoRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction">imageConstraintForAnalogComputerMonitorRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction">scmsRestriction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl">uncompressedDigitalAudioOpl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl">uncompressedDigitalVideoOpl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}. |

---

##### `agcAndColorStripeRestriction`<sup>Optional</sup> <a name="agcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction"></a>

```java
public java.lang.Number getAgcAndColorStripeRestriction();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}.

---

##### `allowPassingVideoContentToUnknownOutput`<sup>Optional</sup> <a name="allowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput"></a>

```java
public java.lang.String getAllowPassingVideoContentToUnknownOutput();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}.

---

##### `analogVideoOpl`<sup>Optional</sup> <a name="analogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl"></a>

```java
public java.lang.Number getAnalogVideoOpl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}.

---

##### `compressedDigitalAudioOpl`<sup>Optional</sup> <a name="compressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl"></a>

```java
public java.lang.Number getCompressedDigitalAudioOpl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}.

---

##### `compressedDigitalVideoOpl`<sup>Optional</sup> <a name="compressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl"></a>

```java
public java.lang.Number getCompressedDigitalVideoOpl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}.

---

##### `digitalVideoOnlyContentRestriction`<sup>Optional</sup> <a name="digitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction"></a>

```java
public java.lang.Object getDigitalVideoOnlyContentRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}.

---

##### `explicitAnalogTelevisionOutputRestriction`<sup>Optional</sup> <a name="explicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction getExplicitAnalogTelevisionOutputRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

explicit_analog_television_output_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#explicit_analog_television_output_restriction MediaContentKeyPolicy#explicit_analog_television_output_restriction}

---

##### `firstPlayExpiration`<sup>Optional</sup> <a name="firstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration"></a>

```java
public java.lang.String getFirstPlayExpiration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}.

---

##### `imageConstraintForAnalogComponentVideoRestriction`<sup>Optional</sup> <a name="imageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```java
public java.lang.Object getImageConstraintForAnalogComponentVideoRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}.

---

##### `imageConstraintForAnalogComputerMonitorRestriction`<sup>Optional</sup> <a name="imageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```java
public java.lang.Object getImageConstraintForAnalogComputerMonitorRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}.

---

##### `scmsRestriction`<sup>Optional</sup> <a name="scmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction"></a>

```java
public java.lang.Number getScmsRestriction();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}.

---

##### `uncompressedDigitalAudioOpl`<sup>Optional</sup> <a name="uncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl"></a>

```java
public java.lang.Number getUncompressedDigitalAudioOpl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}.

---

##### `uncompressedDigitalVideoOpl`<sup>Optional</sup> <a name="uncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl"></a>

```java
public java.lang.Number getUncompressedDigitalVideoOpl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction;

MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.builder()
    .controlBits(java.lang.Number)
//  .bestEffortEnforced(java.lang.Boolean)
//  .bestEffortEnforced(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits">controlBits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced">bestEffortEnforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}. |

---

##### `controlBits`<sup>Required</sup> <a name="controlBits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits"></a>

```java
public java.lang.Number getControlBits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}.

---

##### `bestEffortEnforced`<sup>Optional</sup> <a name="bestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced"></a>

```java
public java.lang.Object getBestEffortEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestriction <a name="MediaContentKeyPolicyPolicyOptionTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestriction;

MediaContentKeyPolicyPolicyOptionTokenRestriction.builder()
//  .alternateKey(IResolvable)
//  .alternateKey(java.util.List<MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey>)
//  .audience(java.lang.String)
//  .issuer(java.lang.String)
//  .openIdConnectDiscoveryDocument(java.lang.String)
//  .primaryRsaTokenKeyExponent(java.lang.String)
//  .primaryRsaTokenKeyModulus(java.lang.String)
//  .primarySymmetricTokenKey(java.lang.String)
//  .primaryX509TokenKeyRaw(java.lang.String)
//  .requiredClaim(IResolvable)
//  .requiredClaim(java.util.List<MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim>)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey">alternateKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>></code> | alternate_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience">audience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument">openIdConnectDiscoveryDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent">primaryRsaTokenKeyExponent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus">primaryRsaTokenKeyModulus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey">primarySymmetricTokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw">primaryX509TokenKeyRaw</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim">requiredClaim</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>></code> | required_claim block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}. |

---

##### `alternateKey`<sup>Optional</sup> <a name="alternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey"></a>

```java
public java.lang.Object getAlternateKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>>

alternate_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#alternate_key MediaContentKeyPolicy#alternate_key}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}.

---

##### `openIdConnectDiscoveryDocument`<sup>Optional</sup> <a name="openIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument"></a>

```java
public java.lang.String getOpenIdConnectDiscoveryDocument();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}.

---

##### `primaryRsaTokenKeyExponent`<sup>Optional</sup> <a name="primaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent"></a>

```java
public java.lang.String getPrimaryRsaTokenKeyExponent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}.

---

##### `primaryRsaTokenKeyModulus`<sup>Optional</sup> <a name="primaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus"></a>

```java
public java.lang.String getPrimaryRsaTokenKeyModulus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}.

---

##### `primarySymmetricTokenKey`<sup>Optional</sup> <a name="primarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey"></a>

```java
public java.lang.String getPrimarySymmetricTokenKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}.

---

##### `primaryX509TokenKeyRaw`<sup>Optional</sup> <a name="primaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw"></a>

```java
public java.lang.String getPrimaryX509TokenKeyRaw();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}.

---

##### `requiredClaim`<sup>Optional</sup> <a name="requiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim"></a>

```java
public java.lang.Object getRequiredClaim();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>>

required_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#required_claim MediaContentKeyPolicy#required_claim}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey;

MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.builder()
//  .rsaTokenKeyExponent(java.lang.String)
//  .rsaTokenKeyModulus(java.lang.String)
//  .symmetricTokenKey(java.lang.String)
//  .x509TokenKeyRaw(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent">rsaTokenKeyExponent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus">rsaTokenKeyModulus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey">symmetricTokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw">x509TokenKeyRaw</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}. |

---

##### `rsaTokenKeyExponent`<sup>Optional</sup> <a name="rsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent"></a>

```java
public java.lang.String getRsaTokenKeyExponent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}.

---

##### `rsaTokenKeyModulus`<sup>Optional</sup> <a name="rsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus"></a>

```java
public java.lang.String getRsaTokenKeyModulus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}.

---

##### `symmetricTokenKey`<sup>Optional</sup> <a name="symmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey"></a>

```java
public java.lang.String getSymmetricTokenKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}.

---

##### `x509TokenKeyRaw`<sup>Optional</sup> <a name="x509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw"></a>

```java
public java.lang.String getX509TokenKeyRaw();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim;

MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.builder()
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}.

---

### MediaContentKeyPolicyTimeouts <a name="MediaContentKeyPolicyTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyTimeouts;

MediaContentKeyPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference;

new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds">resetPlaybackDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds">resetStorageDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaybackDurationSeconds` <a name="resetPlaybackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds"></a>

```java
public void resetPlaybackDurationSeconds()
```

##### `resetStorageDurationSeconds` <a name="resetStorageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds"></a>

```java
public void resetStorageDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput">playbackDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput">storageDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds">playbackDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds">storageDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `playbackDurationSecondsInput`<sup>Optional</sup> <a name="playbackDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput"></a>

```java
public java.lang.Number getPlaybackDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `storageDurationSecondsInput`<sup>Optional</sup> <a name="storageDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput"></a>

```java
public java.lang.Number getStorageDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `playbackDurationSeconds`<sup>Required</sup> <a name="playbackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds"></a>

```java
public java.lang.Number getPlaybackDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `storageDurationSeconds`<sup>Required</sup> <a name="storageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds"></a>

```java
public java.lang.Number getStorageDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference;

new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration">putOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk">resetAsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration">resetOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx">resetPfx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword">resetPfxPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType">resetRentalAndLeaseKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds">resetRentalDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOfflineRentalConfiguration` <a name="putOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration"></a>

```java
public void putOfflineRentalConfiguration(MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `resetAsk` <a name="resetAsk" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk"></a>

```java
public void resetAsk()
```

##### `resetOfflineRentalConfiguration` <a name="resetOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration"></a>

```java
public void resetOfflineRentalConfiguration()
```

##### `resetPfx` <a name="resetPfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx"></a>

```java
public void resetPfx()
```

##### `resetPfxPassword` <a name="resetPfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword"></a>

```java
public void resetPfxPassword()
```

##### `resetRentalAndLeaseKeyType` <a name="resetRentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType"></a>

```java
public void resetRentalAndLeaseKeyType()
```

##### `resetRentalDurationSeconds` <a name="resetRentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds"></a>

```java
public void resetRentalDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration">offlineRentalConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput">askInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput">offlineRentalConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput">pfxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput">pfxPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput">rentalAndLeaseKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput">rentalDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask">ask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx">pfx</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword">pfxPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType">rentalAndLeaseKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds">rentalDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offlineRentalConfiguration`<sup>Required</sup> <a name="offlineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference getOfflineRentalConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a>

---

##### `askInput`<sup>Optional</sup> <a name="askInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput"></a>

```java
public java.lang.String getAskInput();
```

- *Type:* java.lang.String

---

##### `offlineRentalConfigurationInput`<sup>Optional</sup> <a name="offlineRentalConfigurationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration getOfflineRentalConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `pfxInput`<sup>Optional</sup> <a name="pfxInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput"></a>

```java
public java.lang.String getPfxInput();
```

- *Type:* java.lang.String

---

##### `pfxPasswordInput`<sup>Optional</sup> <a name="pfxPasswordInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput"></a>

```java
public java.lang.String getPfxPasswordInput();
```

- *Type:* java.lang.String

---

##### `rentalAndLeaseKeyTypeInput`<sup>Optional</sup> <a name="rentalAndLeaseKeyTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput"></a>

```java
public java.lang.String getRentalAndLeaseKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `rentalDurationSecondsInput`<sup>Optional</sup> <a name="rentalDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput"></a>

```java
public java.lang.Number getRentalDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `ask`<sup>Required</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask"></a>

```java
public java.lang.String getAsk();
```

- *Type:* java.lang.String

---

##### `pfx`<sup>Required</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx"></a>

```java
public java.lang.String getPfx();
```

- *Type:* java.lang.String

---

##### `pfxPassword`<sup>Required</sup> <a name="pfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword"></a>

```java
public java.lang.String getPfxPassword();
```

- *Type:* java.lang.String

---

##### `rentalAndLeaseKeyType`<sup>Required</sup> <a name="rentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType"></a>

```java
public java.lang.String getRentalAndLeaseKeyType();
```

- *Type:* java.lang.String

---

##### `rentalDurationSeconds`<sup>Required</sup> <a name="rentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds"></a>

```java
public java.lang.Number getRentalDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionList <a name="MediaContentKeyPolicyPolicyOptionList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionList;

new MediaContentKeyPolicyPolicyOptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get"></a>

```java
public MediaContentKeyPolicyPolicyOptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>>

---


### MediaContentKeyPolicyPolicyOptionOutputReference <a name="MediaContentKeyPolicyPolicyOptionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionOutputReference;

new MediaContentKeyPolicyPolicyOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration">putFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense">putPlayreadyConfigurationLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction">putTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled">resetClearKeyConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration">resetFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled">resetOpenRestrictionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense">resetPlayreadyConfigurationLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData">resetPlayreadyResponseCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction">resetTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate">resetWidevineConfigurationTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFairplayConfiguration` <a name="putFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration"></a>

```java
public void putFairplayConfiguration(MediaContentKeyPolicyPolicyOptionFairplayConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `putPlayreadyConfigurationLicense` <a name="putPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense"></a>

```java
public void putPlayreadyConfigurationLicense(IResolvable OR java.util.List<MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>>

---

##### `putTokenRestriction` <a name="putTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction"></a>

```java
public void putTokenRestriction(MediaContentKeyPolicyPolicyOptionTokenRestriction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `resetClearKeyConfigurationEnabled` <a name="resetClearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled"></a>

```java
public void resetClearKeyConfigurationEnabled()
```

##### `resetFairplayConfiguration` <a name="resetFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration"></a>

```java
public void resetFairplayConfiguration()
```

##### `resetOpenRestrictionEnabled` <a name="resetOpenRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled"></a>

```java
public void resetOpenRestrictionEnabled()
```

##### `resetPlayreadyConfigurationLicense` <a name="resetPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense"></a>

```java
public void resetPlayreadyConfigurationLicense()
```

##### `resetPlayreadyResponseCustomData` <a name="resetPlayreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData"></a>

```java
public void resetPlayreadyResponseCustomData()
```

##### `resetTokenRestriction` <a name="resetTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction"></a>

```java
public void resetTokenRestriction()
```

##### `resetWidevineConfigurationTemplate` <a name="resetWidevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate"></a>

```java
public void resetWidevineConfigurationTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration">fairplayConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense">playreadyConfigurationLicense</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction">tokenRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput">clearKeyConfigurationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput">fairplayConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput">openRestrictionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput">playreadyConfigurationLicenseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput">playreadyResponseCustomDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput">tokenRestrictionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput">widevineConfigurationTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled">clearKeyConfigurationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled">openRestrictionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData">playreadyResponseCustomData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate">widevineConfigurationTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fairplayConfiguration`<sup>Required</sup> <a name="fairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference getFairplayConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a>

---

##### `playreadyConfigurationLicense`<sup>Required</sup> <a name="playreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList getPlayreadyConfigurationLicense();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a>

---

##### `tokenRestriction`<sup>Required</sup> <a name="tokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference getTokenRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a>

---

##### `clearKeyConfigurationEnabledInput`<sup>Optional</sup> <a name="clearKeyConfigurationEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput"></a>

```java
public java.lang.Object getClearKeyConfigurationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fairplayConfigurationInput`<sup>Optional</sup> <a name="fairplayConfigurationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput"></a>

```java
public MediaContentKeyPolicyPolicyOptionFairplayConfiguration getFairplayConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `openRestrictionEnabledInput`<sup>Optional</sup> <a name="openRestrictionEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput"></a>

```java
public java.lang.Object getOpenRestrictionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `playreadyConfigurationLicenseInput`<sup>Optional</sup> <a name="playreadyConfigurationLicenseInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput"></a>

```java
public java.lang.Object getPlayreadyConfigurationLicenseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>>

---

##### `playreadyResponseCustomDataInput`<sup>Optional</sup> <a name="playreadyResponseCustomDataInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput"></a>

```java
public java.lang.String getPlayreadyResponseCustomDataInput();
```

- *Type:* java.lang.String

---

##### `tokenRestrictionInput`<sup>Optional</sup> <a name="tokenRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestriction getTokenRestrictionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `widevineConfigurationTemplateInput`<sup>Optional</sup> <a name="widevineConfigurationTemplateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput"></a>

```java
public java.lang.String getWidevineConfigurationTemplateInput();
```

- *Type:* java.lang.String

---

##### `clearKeyConfigurationEnabled`<sup>Required</sup> <a name="clearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled"></a>

```java
public java.lang.Object getClearKeyConfigurationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openRestrictionEnabled`<sup>Required</sup> <a name="openRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled"></a>

```java
public java.lang.Object getOpenRestrictionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `playreadyResponseCustomData`<sup>Required</sup> <a name="playreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData"></a>

```java
public java.lang.String getPlayreadyResponseCustomData();
```

- *Type:* java.lang.String

---

##### `widevineConfigurationTemplate`<sup>Required</sup> <a name="widevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate"></a>

```java
public java.lang.String getWidevineConfigurationTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight">putPlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices">resetAllowTestDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate">resetBeginDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled">resetContentKeyLocationFromHeaderEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId">resetContentKeyLocationFromKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight">resetPlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate">resetRelativeBeginDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate">resetRelativeExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlayRight` <a name="putPlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight"></a>

```java
public void putPlayRight(MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `resetAllowTestDevices` <a name="resetAllowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices"></a>

```java
public void resetAllowTestDevices()
```

##### `resetBeginDate` <a name="resetBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate"></a>

```java
public void resetBeginDate()
```

##### `resetContentKeyLocationFromHeaderEnabled` <a name="resetContentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled"></a>

```java
public void resetContentKeyLocationFromHeaderEnabled()
```

##### `resetContentKeyLocationFromKeyId` <a name="resetContentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId"></a>

```java
public void resetContentKeyLocationFromKeyId()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod"></a>

```java
public void resetGracePeriod()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetPlayRight` <a name="resetPlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight"></a>

```java
public void resetPlayRight()
```

##### `resetRelativeBeginDate` <a name="resetRelativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate"></a>

```java
public void resetRelativeBeginDate()
```

##### `resetRelativeExpirationDate` <a name="resetRelativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate"></a>

```java
public void resetRelativeExpirationDate()
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel"></a>

```java
public void resetSecurityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight">playRight</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput">allowTestDevicesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput">beginDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput">contentKeyLocationFromHeaderEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput">contentKeyLocationFromKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput">playRightInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput">relativeBeginDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput">relativeExpirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices">allowTestDevices</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate">beginDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled">contentKeyLocationFromHeaderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId">contentKeyLocationFromKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate">relativeBeginDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate">relativeExpirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `playRight`<sup>Required</sup> <a name="playRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference getPlayRight();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a>

---

##### `allowTestDevicesInput`<sup>Optional</sup> <a name="allowTestDevicesInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput"></a>

```java
public java.lang.Object getAllowTestDevicesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `beginDateInput`<sup>Optional</sup> <a name="beginDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput"></a>

```java
public java.lang.String getBeginDateInput();
```

- *Type:* java.lang.String

---

##### `contentKeyLocationFromHeaderEnabledInput`<sup>Optional</sup> <a name="contentKeyLocationFromHeaderEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput"></a>

```java
public java.lang.Object getContentKeyLocationFromHeaderEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentKeyLocationFromKeyIdInput`<sup>Optional</sup> <a name="contentKeyLocationFromKeyIdInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput"></a>

```java
public java.lang.String getContentKeyLocationFromKeyIdInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput"></a>

```java
public java.lang.String getGracePeriodInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `playRightInput`<sup>Optional</sup> <a name="playRightInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight getPlayRightInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `relativeBeginDateInput`<sup>Optional</sup> <a name="relativeBeginDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput"></a>

```java
public java.lang.String getRelativeBeginDateInput();
```

- *Type:* java.lang.String

---

##### `relativeExpirationDateInput`<sup>Optional</sup> <a name="relativeExpirationDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput"></a>

```java
public java.lang.String getRelativeExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput"></a>

```java
public java.lang.String getSecurityLevelInput();
```

- *Type:* java.lang.String

---

##### `allowTestDevices`<sup>Required</sup> <a name="allowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices"></a>

```java
public java.lang.Object getAllowTestDevices();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `beginDate`<sup>Required</sup> <a name="beginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate"></a>

```java
public java.lang.String getBeginDate();
```

- *Type:* java.lang.String

---

##### `contentKeyLocationFromHeaderEnabled`<sup>Required</sup> <a name="contentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled"></a>

```java
public java.lang.Object getContentKeyLocationFromHeaderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentKeyLocationFromKeyId`<sup>Required</sup> <a name="contentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId"></a>

```java
public java.lang.String getContentKeyLocationFromKeyId();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod"></a>

```java
public java.lang.String getGracePeriod();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `relativeBeginDate`<sup>Required</sup> <a name="relativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate"></a>

```java
public java.lang.String getRelativeBeginDate();
```

- *Type:* java.lang.String

---

##### `relativeExpirationDate`<sup>Required</sup> <a name="relativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate"></a>

```java
public java.lang.String getRelativeExpirationDate();
```

- *Type:* java.lang.String

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced">resetBestEffortEnforced</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBestEffortEnforced` <a name="resetBestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced"></a>

```java
public void resetBestEffortEnforced()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput">bestEffortEnforcedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput">controlBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced">bestEffortEnforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits">controlBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bestEffortEnforcedInput`<sup>Optional</sup> <a name="bestEffortEnforcedInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput"></a>

```java
public java.lang.Object getBestEffortEnforcedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `controlBitsInput`<sup>Optional</sup> <a name="controlBitsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput"></a>

```java
public java.lang.Number getControlBitsInput();
```

- *Type:* java.lang.Number

---

##### `bestEffortEnforced`<sup>Required</sup> <a name="bestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced"></a>

```java
public java.lang.Object getBestEffortEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `controlBits`<sup>Required</sup> <a name="controlBits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits"></a>

```java
public java.lang.Number getControlBits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction">putExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction">resetAgcAndColorStripeRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput">resetAllowPassingVideoContentToUnknownOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl">resetAnalogVideoOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl">resetCompressedDigitalAudioOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl">resetCompressedDigitalVideoOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction">resetDigitalVideoOnlyContentRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction">resetExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration">resetFirstPlayExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction">resetImageConstraintForAnalogComponentVideoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction">resetImageConstraintForAnalogComputerMonitorRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction">resetScmsRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl">resetUncompressedDigitalAudioOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl">resetUncompressedDigitalVideoOpl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplicitAnalogTelevisionOutputRestriction` <a name="putExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction"></a>

```java
public void putExplicitAnalogTelevisionOutputRestriction(MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `resetAgcAndColorStripeRestriction` <a name="resetAgcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction"></a>

```java
public void resetAgcAndColorStripeRestriction()
```

##### `resetAllowPassingVideoContentToUnknownOutput` <a name="resetAllowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput"></a>

```java
public void resetAllowPassingVideoContentToUnknownOutput()
```

##### `resetAnalogVideoOpl` <a name="resetAnalogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl"></a>

```java
public void resetAnalogVideoOpl()
```

##### `resetCompressedDigitalAudioOpl` <a name="resetCompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl"></a>

```java
public void resetCompressedDigitalAudioOpl()
```

##### `resetCompressedDigitalVideoOpl` <a name="resetCompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl"></a>

```java
public void resetCompressedDigitalVideoOpl()
```

##### `resetDigitalVideoOnlyContentRestriction` <a name="resetDigitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction"></a>

```java
public void resetDigitalVideoOnlyContentRestriction()
```

##### `resetExplicitAnalogTelevisionOutputRestriction` <a name="resetExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction"></a>

```java
public void resetExplicitAnalogTelevisionOutputRestriction()
```

##### `resetFirstPlayExpiration` <a name="resetFirstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration"></a>

```java
public void resetFirstPlayExpiration()
```

##### `resetImageConstraintForAnalogComponentVideoRestriction` <a name="resetImageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction"></a>

```java
public void resetImageConstraintForAnalogComponentVideoRestriction()
```

##### `resetImageConstraintForAnalogComputerMonitorRestriction` <a name="resetImageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction"></a>

```java
public void resetImageConstraintForAnalogComputerMonitorRestriction()
```

##### `resetScmsRestriction` <a name="resetScmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction"></a>

```java
public void resetScmsRestriction()
```

##### `resetUncompressedDigitalAudioOpl` <a name="resetUncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl"></a>

```java
public void resetUncompressedDigitalAudioOpl()
```

##### `resetUncompressedDigitalVideoOpl` <a name="resetUncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl"></a>

```java
public void resetUncompressedDigitalVideoOpl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction">explicitAnalogTelevisionOutputRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput">agcAndColorStripeRestrictionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput">allowPassingVideoContentToUnknownOutputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput">analogVideoOplInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput">compressedDigitalAudioOplInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput">compressedDigitalVideoOplInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput">digitalVideoOnlyContentRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput">explicitAnalogTelevisionOutputRestrictionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput">firstPlayExpirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput">imageConstraintForAnalogComponentVideoRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput">imageConstraintForAnalogComputerMonitorRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput">scmsRestrictionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput">uncompressedDigitalAudioOplInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput">uncompressedDigitalVideoOplInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction">agcAndColorStripeRestriction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput">allowPassingVideoContentToUnknownOutput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl">analogVideoOpl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl">compressedDigitalAudioOpl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl">compressedDigitalVideoOpl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction">digitalVideoOnlyContentRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration">firstPlayExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction">imageConstraintForAnalogComponentVideoRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction">imageConstraintForAnalogComputerMonitorRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction">scmsRestriction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl">uncompressedDigitalAudioOpl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl">uncompressedDigitalVideoOpl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `explicitAnalogTelevisionOutputRestriction`<sup>Required</sup> <a name="explicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference getExplicitAnalogTelevisionOutputRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a>

---

##### `agcAndColorStripeRestrictionInput`<sup>Optional</sup> <a name="agcAndColorStripeRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput"></a>

```java
public java.lang.Number getAgcAndColorStripeRestrictionInput();
```

- *Type:* java.lang.Number

---

##### `allowPassingVideoContentToUnknownOutputInput`<sup>Optional</sup> <a name="allowPassingVideoContentToUnknownOutputInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput"></a>

```java
public java.lang.String getAllowPassingVideoContentToUnknownOutputInput();
```

- *Type:* java.lang.String

---

##### `analogVideoOplInput`<sup>Optional</sup> <a name="analogVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput"></a>

```java
public java.lang.Number getAnalogVideoOplInput();
```

- *Type:* java.lang.Number

---

##### `compressedDigitalAudioOplInput`<sup>Optional</sup> <a name="compressedDigitalAudioOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput"></a>

```java
public java.lang.Number getCompressedDigitalAudioOplInput();
```

- *Type:* java.lang.Number

---

##### `compressedDigitalVideoOplInput`<sup>Optional</sup> <a name="compressedDigitalVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput"></a>

```java
public java.lang.Number getCompressedDigitalVideoOplInput();
```

- *Type:* java.lang.Number

---

##### `digitalVideoOnlyContentRestrictionInput`<sup>Optional</sup> <a name="digitalVideoOnlyContentRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput"></a>

```java
public java.lang.Object getDigitalVideoOnlyContentRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `explicitAnalogTelevisionOutputRestrictionInput`<sup>Optional</sup> <a name="explicitAnalogTelevisionOutputRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction getExplicitAnalogTelevisionOutputRestrictionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `firstPlayExpirationInput`<sup>Optional</sup> <a name="firstPlayExpirationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput"></a>

```java
public java.lang.String getFirstPlayExpirationInput();
```

- *Type:* java.lang.String

---

##### `imageConstraintForAnalogComponentVideoRestrictionInput`<sup>Optional</sup> <a name="imageConstraintForAnalogComponentVideoRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput"></a>

```java
public java.lang.Object getImageConstraintForAnalogComponentVideoRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `imageConstraintForAnalogComputerMonitorRestrictionInput`<sup>Optional</sup> <a name="imageConstraintForAnalogComputerMonitorRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput"></a>

```java
public java.lang.Object getImageConstraintForAnalogComputerMonitorRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmsRestrictionInput`<sup>Optional</sup> <a name="scmsRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput"></a>

```java
public java.lang.Number getScmsRestrictionInput();
```

- *Type:* java.lang.Number

---

##### `uncompressedDigitalAudioOplInput`<sup>Optional</sup> <a name="uncompressedDigitalAudioOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput"></a>

```java
public java.lang.Number getUncompressedDigitalAudioOplInput();
```

- *Type:* java.lang.Number

---

##### `uncompressedDigitalVideoOplInput`<sup>Optional</sup> <a name="uncompressedDigitalVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput"></a>

```java
public java.lang.Number getUncompressedDigitalVideoOplInput();
```

- *Type:* java.lang.Number

---

##### `agcAndColorStripeRestriction`<sup>Required</sup> <a name="agcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction"></a>

```java
public java.lang.Number getAgcAndColorStripeRestriction();
```

- *Type:* java.lang.Number

---

##### `allowPassingVideoContentToUnknownOutput`<sup>Required</sup> <a name="allowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput"></a>

```java
public java.lang.String getAllowPassingVideoContentToUnknownOutput();
```

- *Type:* java.lang.String

---

##### `analogVideoOpl`<sup>Required</sup> <a name="analogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl"></a>

```java
public java.lang.Number getAnalogVideoOpl();
```

- *Type:* java.lang.Number

---

##### `compressedDigitalAudioOpl`<sup>Required</sup> <a name="compressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl"></a>

```java
public java.lang.Number getCompressedDigitalAudioOpl();
```

- *Type:* java.lang.Number

---

##### `compressedDigitalVideoOpl`<sup>Required</sup> <a name="compressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl"></a>

```java
public java.lang.Number getCompressedDigitalVideoOpl();
```

- *Type:* java.lang.Number

---

##### `digitalVideoOnlyContentRestriction`<sup>Required</sup> <a name="digitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction"></a>

```java
public java.lang.Object getDigitalVideoOnlyContentRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firstPlayExpiration`<sup>Required</sup> <a name="firstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration"></a>

```java
public java.lang.String getFirstPlayExpiration();
```

- *Type:* java.lang.String

---

##### `imageConstraintForAnalogComponentVideoRestriction`<sup>Required</sup> <a name="imageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```java
public java.lang.Object getImageConstraintForAnalogComponentVideoRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `imageConstraintForAnalogComputerMonitorRestriction`<sup>Required</sup> <a name="imageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```java
public java.lang.Object getImageConstraintForAnalogComputerMonitorRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmsRestriction`<sup>Required</sup> <a name="scmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction"></a>

```java
public java.lang.Number getScmsRestriction();
```

- *Type:* java.lang.Number

---

##### `uncompressedDigitalAudioOpl`<sup>Required</sup> <a name="uncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl"></a>

```java
public java.lang.Number getUncompressedDigitalAudioOpl();
```

- *Type:* java.lang.Number

---

##### `uncompressedDigitalVideoOpl`<sup>Required</sup> <a name="uncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl"></a>

```java
public java.lang.Number getUncompressedDigitalVideoOpl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue"></a>

```java
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent">resetRsaTokenKeyExponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus">resetRsaTokenKeyModulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey">resetSymmetricTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw">resetX509TokenKeyRaw</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRsaTokenKeyExponent` <a name="resetRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent"></a>

```java
public void resetRsaTokenKeyExponent()
```

##### `resetRsaTokenKeyModulus` <a name="resetRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus"></a>

```java
public void resetRsaTokenKeyModulus()
```

##### `resetSymmetricTokenKey` <a name="resetSymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey"></a>

```java
public void resetSymmetricTokenKey()
```

##### `resetX509TokenKeyRaw` <a name="resetX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw"></a>

```java
public void resetX509TokenKeyRaw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput">rsaTokenKeyExponentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput">rsaTokenKeyModulusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput">symmetricTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput">x509TokenKeyRawInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent">rsaTokenKeyExponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus">rsaTokenKeyModulus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey">symmetricTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw">x509TokenKeyRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rsaTokenKeyExponentInput`<sup>Optional</sup> <a name="rsaTokenKeyExponentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput"></a>

```java
public java.lang.String getRsaTokenKeyExponentInput();
```

- *Type:* java.lang.String

---

##### `rsaTokenKeyModulusInput`<sup>Optional</sup> <a name="rsaTokenKeyModulusInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput"></a>

```java
public java.lang.String getRsaTokenKeyModulusInput();
```

- *Type:* java.lang.String

---

##### `symmetricTokenKeyInput`<sup>Optional</sup> <a name="symmetricTokenKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput"></a>

```java
public java.lang.String getSymmetricTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `x509TokenKeyRawInput`<sup>Optional</sup> <a name="x509TokenKeyRawInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput"></a>

```java
public java.lang.String getX509TokenKeyRawInput();
```

- *Type:* java.lang.String

---

##### `rsaTokenKeyExponent`<sup>Required</sup> <a name="rsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent"></a>

```java
public java.lang.String getRsaTokenKeyExponent();
```

- *Type:* java.lang.String

---

##### `rsaTokenKeyModulus`<sup>Required</sup> <a name="rsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus"></a>

```java
public java.lang.String getRsaTokenKeyModulus();
```

- *Type:* java.lang.String

---

##### `symmetricTokenKey`<sup>Required</sup> <a name="symmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey"></a>

```java
public java.lang.String getSymmetricTokenKey();
```

- *Type:* java.lang.String

---

##### `x509TokenKeyRaw`<sup>Required</sup> <a name="x509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw"></a>

```java
public java.lang.String getX509TokenKeyRaw();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey">putAlternateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim">putRequiredClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey">resetAlternateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument">resetOpenIdConnectDiscoveryDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent">resetPrimaryRsaTokenKeyExponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus">resetPrimaryRsaTokenKeyModulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey">resetPrimarySymmetricTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw">resetPrimaryX509TokenKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim">resetRequiredClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlternateKey` <a name="putAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey"></a>

```java
public void putAlternateKey(IResolvable OR java.util.List<MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>>

---

##### `putRequiredClaim` <a name="putRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim"></a>

```java
public void putRequiredClaim(IResolvable OR java.util.List<MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>>

---

##### `resetAlternateKey` <a name="resetAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey"></a>

```java
public void resetAlternateKey()
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetOpenIdConnectDiscoveryDocument` <a name="resetOpenIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument"></a>

```java
public void resetOpenIdConnectDiscoveryDocument()
```

##### `resetPrimaryRsaTokenKeyExponent` <a name="resetPrimaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent"></a>

```java
public void resetPrimaryRsaTokenKeyExponent()
```

##### `resetPrimaryRsaTokenKeyModulus` <a name="resetPrimaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus"></a>

```java
public void resetPrimaryRsaTokenKeyModulus()
```

##### `resetPrimarySymmetricTokenKey` <a name="resetPrimarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey"></a>

```java
public void resetPrimarySymmetricTokenKey()
```

##### `resetPrimaryX509TokenKeyRaw` <a name="resetPrimaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw"></a>

```java
public void resetPrimaryX509TokenKeyRaw()
```

##### `resetRequiredClaim` <a name="resetRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim"></a>

```java
public void resetRequiredClaim()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType"></a>

```java
public void resetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey">alternateKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim">requiredClaim</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput">alternateKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput">openIdConnectDiscoveryDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput">primaryRsaTokenKeyExponentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput">primaryRsaTokenKeyModulusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput">primarySymmetricTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput">primaryX509TokenKeyRawInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput">requiredClaimInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument">openIdConnectDiscoveryDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent">primaryRsaTokenKeyExponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus">primaryRsaTokenKeyModulus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey">primarySymmetricTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw">primaryX509TokenKeyRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alternateKey`<sup>Required</sup> <a name="alternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList getAlternateKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a>

---

##### `requiredClaim`<sup>Required</sup> <a name="requiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList getRequiredClaim();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a>

---

##### `alternateKeyInput`<sup>Optional</sup> <a name="alternateKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput"></a>

```java
public java.lang.Object getAlternateKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `openIdConnectDiscoveryDocumentInput`<sup>Optional</sup> <a name="openIdConnectDiscoveryDocumentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput"></a>

```java
public java.lang.String getOpenIdConnectDiscoveryDocumentInput();
```

- *Type:* java.lang.String

---

##### `primaryRsaTokenKeyExponentInput`<sup>Optional</sup> <a name="primaryRsaTokenKeyExponentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput"></a>

```java
public java.lang.String getPrimaryRsaTokenKeyExponentInput();
```

- *Type:* java.lang.String

---

##### `primaryRsaTokenKeyModulusInput`<sup>Optional</sup> <a name="primaryRsaTokenKeyModulusInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput"></a>

```java
public java.lang.String getPrimaryRsaTokenKeyModulusInput();
```

- *Type:* java.lang.String

---

##### `primarySymmetricTokenKeyInput`<sup>Optional</sup> <a name="primarySymmetricTokenKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput"></a>

```java
public java.lang.String getPrimarySymmetricTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `primaryX509TokenKeyRawInput`<sup>Optional</sup> <a name="primaryX509TokenKeyRawInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput"></a>

```java
public java.lang.String getPrimaryX509TokenKeyRawInput();
```

- *Type:* java.lang.String

---

##### `requiredClaimInput`<sup>Optional</sup> <a name="requiredClaimInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput"></a>

```java
public java.lang.Object getRequiredClaimInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>>

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `openIdConnectDiscoveryDocument`<sup>Required</sup> <a name="openIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument"></a>

```java
public java.lang.String getOpenIdConnectDiscoveryDocument();
```

- *Type:* java.lang.String

---

##### `primaryRsaTokenKeyExponent`<sup>Required</sup> <a name="primaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent"></a>

```java
public java.lang.String getPrimaryRsaTokenKeyExponent();
```

- *Type:* java.lang.String

---

##### `primaryRsaTokenKeyModulus`<sup>Required</sup> <a name="primaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus"></a>

```java
public java.lang.String getPrimaryRsaTokenKeyModulus();
```

- *Type:* java.lang.String

---

##### `primarySymmetricTokenKey`<sup>Required</sup> <a name="primarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey"></a>

```java
public java.lang.String getPrimarySymmetricTokenKey();
```

- *Type:* java.lang.String

---

##### `primaryX509TokenKeyRaw`<sup>Required</sup> <a name="primaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw"></a>

```java
public java.lang.String getPrimaryX509TokenKeyRaw();
```

- *Type:* java.lang.String

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestriction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get"></a>

```java
public MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>

---


### MediaContentKeyPolicyTimeoutsOutputReference <a name="MediaContentKeyPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_content_key_policy.MediaContentKeyPolicyTimeoutsOutputReference;

new MediaContentKeyPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---



