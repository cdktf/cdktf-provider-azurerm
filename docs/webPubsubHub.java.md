# `webPubsubHub` Submodule <a name="`webPubsubHub` Submodule" id="@cdktf/provider-azurerm.webPubsubHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubHub <a name="WebPubsubHub" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub azurerm_web_pubsub_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHub;

WebPubsubHub.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .webPubsubId(java.lang.String)
//  .anonymousConnectionsEnabled(java.lang.Boolean)
//  .anonymousConnectionsEnabled(IResolvable)
//  .eventHandler(IResolvable)
//  .eventHandler(java.util.List<WebPubsubHubEventHandler>)
//  .eventListener(IResolvable)
//  .eventListener(java.util.List<WebPubsubHubEventListener>)
//  .id(java.lang.String)
//  .timeouts(WebPubsubHubTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.webPubsubId">webPubsubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.anonymousConnectionsEnabled">anonymousConnectionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventHandler">eventHandler</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>></code> | event_handler block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventListener">eventListener</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>></code> | event_listener block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}.

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.webPubsubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}.

---

##### `anonymousConnectionsEnabled`<sup>Optional</sup> <a name="anonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.anonymousConnectionsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}.

---

##### `eventHandler`<sup>Optional</sup> <a name="eventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventHandler"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>>

event_handler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}

---

##### `eventListener`<sup>Optional</sup> <a name="eventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.eventListener"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>>

event_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler">putEventHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener">putEventListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled">resetAnonymousConnectionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler">resetEventHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener">resetEventListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventHandler` <a name="putEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler"></a>

```java
public void putEventHandler(IResolvable OR java.util.List<WebPubsubHubEventHandler> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>>

---

##### `putEventListener` <a name="putEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener"></a>

```java
public void putEventListener(IResolvable OR java.util.List<WebPubsubHubEventListener> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts"></a>

```java
public void putTimeouts(WebPubsubHubTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

---

##### `resetAnonymousConnectionsEnabled` <a name="resetAnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled"></a>

```java
public void resetAnonymousConnectionsEnabled()
```

##### `resetEventHandler` <a name="resetEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler"></a>

```java
public void resetEventHandler()
```

##### `resetEventListener` <a name="resetEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener"></a>

```java
public void resetEventListener()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebPubsubHub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHub;

WebPubsubHub.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHub;

WebPubsubHub.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHub;

WebPubsubHub.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHub;

WebPubsubHub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WebPubsubHub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WebPubsubHub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WebPubsubHub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WebPubsubHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler">eventHandler</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener">eventListener</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput">anonymousConnectionsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput">eventHandlerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput">eventListenerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput">webPubsubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled">anonymousConnectionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId">webPubsubId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventHandler`<sup>Required</sup> <a name="eventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler"></a>

```java
public WebPubsubHubEventHandlerList getEventHandler();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a>

---

##### `eventListener`<sup>Required</sup> <a name="eventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener"></a>

```java
public WebPubsubHubEventListenerList getEventListener();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts"></a>

```java
public WebPubsubHubTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a>

---

##### `anonymousConnectionsEnabledInput`<sup>Optional</sup> <a name="anonymousConnectionsEnabledInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput"></a>

```java
public java.lang.Object getAnonymousConnectionsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventHandlerInput`<sup>Optional</sup> <a name="eventHandlerInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput"></a>

```java
public java.lang.Object getEventHandlerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>>

---

##### `eventListenerInput`<sup>Optional</sup> <a name="eventListenerInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput"></a>

```java
public java.lang.Object getEventListenerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

---

##### `webPubsubIdInput`<sup>Optional</sup> <a name="webPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput"></a>

```java
public java.lang.String getWebPubsubIdInput();
```

- *Type:* java.lang.String

---

##### `anonymousConnectionsEnabled`<sup>Required</sup> <a name="anonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled"></a>

```java
public java.lang.Object getAnonymousConnectionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId"></a>

```java
public java.lang.String getWebPubsubId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubHubConfig <a name="WebPubsubHubConfig" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubConfig;

WebPubsubHubConfig.builder()
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
    .name(java.lang.String)
    .webPubsubId(java.lang.String)
//  .anonymousConnectionsEnabled(java.lang.Boolean)
//  .anonymousConnectionsEnabled(IResolvable)
//  .eventHandler(IResolvable)
//  .eventHandler(java.util.List<WebPubsubHubEventHandler>)
//  .eventListener(IResolvable)
//  .eventListener(java.util.List<WebPubsubHubEventListener>)
//  .id(java.lang.String)
//  .timeouts(WebPubsubHubTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId">webPubsubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled">anonymousConnectionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler">eventHandler</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>></code> | event_handler block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener">eventListener</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>></code> | event_listener block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}.

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId"></a>

```java
public java.lang.String getWebPubsubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}.

---

##### `anonymousConnectionsEnabled`<sup>Optional</sup> <a name="anonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled"></a>

```java
public java.lang.Object getAnonymousConnectionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}.

---

##### `eventHandler`<sup>Optional</sup> <a name="eventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler"></a>

```java
public java.lang.Object getEventHandler();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>>

event_handler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}

---

##### `eventListener`<sup>Optional</sup> <a name="eventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener"></a>

```java
public java.lang.Object getEventListener();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>>

event_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts"></a>

```java
public WebPubsubHubTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}

---

### WebPubsubHubEventHandler <a name="WebPubsubHubEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventHandler;

WebPubsubHubEventHandler.builder()
    .urlTemplate(java.lang.String)
//  .auth(WebPubsubHubEventHandlerAuth)
//  .systemEvents(java.util.List<java.lang.String>)
//  .userEventPattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate">urlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents">systemEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern">userEventPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}. |

---

##### `urlTemplate`<sup>Required</sup> <a name="urlTemplate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate"></a>

```java
public java.lang.String getUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth"></a>

```java
public WebPubsubHubEventHandlerAuth getAuth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#auth WebPubsubHub#auth}

---

##### `systemEvents`<sup>Optional</sup> <a name="systemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents"></a>

```java
public java.util.List<java.lang.String> getSystemEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}.

---

##### `userEventPattern`<sup>Optional</sup> <a name="userEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern"></a>

```java
public java.lang.String getUserEventPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}.

---

### WebPubsubHubEventHandlerAuth <a name="WebPubsubHubEventHandlerAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventHandlerAuth;

WebPubsubHubEventHandlerAuth.builder()
    .managedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId">managedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}. |

---

##### `managedIdentityId`<sup>Required</sup> <a name="managedIdentityId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId"></a>

```java
public java.lang.String getManagedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}.

---

### WebPubsubHubEventListener <a name="WebPubsubHubEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventListener;

WebPubsubHubEventListener.builder()
    .eventhubName(java.lang.String)
    .eventhubNamespaceName(java.lang.String)
//  .systemEventNameFilter(java.util.List<java.lang.String>)
//  .userEventNameFilter(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName">eventhubNamespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter">systemEventNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter">userEventNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}. |

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}.

---

##### `eventhubNamespaceName`<sup>Required</sup> <a name="eventhubNamespaceName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName"></a>

```java
public java.lang.String getEventhubNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}.

---

##### `systemEventNameFilter`<sup>Optional</sup> <a name="systemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter"></a>

```java
public java.util.List<java.lang.String> getSystemEventNameFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}.

---

##### `userEventNameFilter`<sup>Optional</sup> <a name="userEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter"></a>

```java
public java.util.List<java.lang.String> getUserEventNameFilter();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}.

---

### WebPubsubHubTimeouts <a name="WebPubsubHubTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubTimeouts;

WebPubsubHubTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubHubEventHandlerAuthOutputReference <a name="WebPubsubHubEventHandlerAuthOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventHandlerAuthOutputReference;

new WebPubsubHubEventHandlerAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput">managedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId">managedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedIdentityIdInput`<sup>Optional</sup> <a name="managedIdentityIdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput"></a>

```java
public java.lang.String getManagedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `managedIdentityId`<sup>Required</sup> <a name="managedIdentityId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId"></a>

```java
public java.lang.String getManagedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue"></a>

```java
public WebPubsubHubEventHandlerAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---


### WebPubsubHubEventHandlerList <a name="WebPubsubHubEventHandlerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventHandlerList;

new WebPubsubHubEventHandlerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get"></a>

```java
public WebPubsubHubEventHandlerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>>

---


### WebPubsubHubEventHandlerOutputReference <a name="WebPubsubHubEventHandlerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventHandlerOutputReference;

new WebPubsubHubEventHandlerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents">resetSystemEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern">resetUserEventPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuth` <a name="putAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth"></a>

```java
public void putAuth(WebPubsubHubEventHandlerAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `resetAuth` <a name="resetAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth"></a>

```java
public void resetAuth()
```

##### `resetSystemEvents` <a name="resetSystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents"></a>

```java
public void resetSystemEvents()
```

##### `resetUserEventPattern` <a name="resetUserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern"></a>

```java
public void resetUserEventPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput">authInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput">systemEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput">urlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput">userEventPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents">systemEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate">urlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern">userEventPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth"></a>

```java
public WebPubsubHubEventHandlerAuthOutputReference getAuth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput"></a>

```java
public WebPubsubHubEventHandlerAuth getAuthInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `systemEventsInput`<sup>Optional</sup> <a name="systemEventsInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput"></a>

```java
public java.util.List<java.lang.String> getSystemEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlTemplateInput`<sup>Optional</sup> <a name="urlTemplateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput"></a>

```java
public java.lang.String getUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `userEventPatternInput`<sup>Optional</sup> <a name="userEventPatternInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput"></a>

```java
public java.lang.String getUserEventPatternInput();
```

- *Type:* java.lang.String

---

##### `systemEvents`<sup>Required</sup> <a name="systemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents"></a>

```java
public java.util.List<java.lang.String> getSystemEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlTemplate`<sup>Required</sup> <a name="urlTemplate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate"></a>

```java
public java.lang.String getUrlTemplate();
```

- *Type:* java.lang.String

---

##### `userEventPattern`<sup>Required</sup> <a name="userEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern"></a>

```java
public java.lang.String getUserEventPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler">WebPubsubHubEventHandler</a>

---


### WebPubsubHubEventListenerList <a name="WebPubsubHubEventListenerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventListenerList;

new WebPubsubHubEventListenerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get"></a>

```java
public WebPubsubHubEventListenerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>>

---


### WebPubsubHubEventListenerOutputReference <a name="WebPubsubHubEventListenerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubEventListenerOutputReference;

new WebPubsubHubEventListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter">resetSystemEventNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter">resetUserEventNameFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemEventNameFilter` <a name="resetSystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter"></a>

```java
public void resetSystemEventNameFilter()
```

##### `resetUserEventNameFilter` <a name="resetUserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter"></a>

```java
public void resetUserEventNameFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput">eventhubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput">eventhubNamespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput">systemEventNameFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput">userEventNameFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName">eventhubNamespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter">systemEventNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter">userEventNameFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput"></a>

```java
public java.lang.String getEventhubNameInput();
```

- *Type:* java.lang.String

---

##### `eventhubNamespaceNameInput`<sup>Optional</sup> <a name="eventhubNamespaceNameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput"></a>

```java
public java.lang.String getEventhubNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `systemEventNameFilterInput`<sup>Optional</sup> <a name="systemEventNameFilterInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput"></a>

```java
public java.util.List<java.lang.String> getSystemEventNameFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEventNameFilterInput`<sup>Optional</sup> <a name="userEventNameFilterInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput"></a>

```java
public java.util.List<java.lang.String> getUserEventNameFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

---

##### `eventhubNamespaceName`<sup>Required</sup> <a name="eventhubNamespaceName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName"></a>

```java
public java.lang.String getEventhubNamespaceName();
```

- *Type:* java.lang.String

---

##### `systemEventNameFilter`<sup>Required</sup> <a name="systemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter"></a>

```java
public java.util.List<java.lang.String> getSystemEventNameFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEventNameFilter`<sup>Required</sup> <a name="userEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter"></a>

```java
public java.util.List<java.lang.String> getUserEventNameFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener">WebPubsubHubEventListener</a>

---


### WebPubsubHubTimeoutsOutputReference <a name="WebPubsubHubTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_hub.WebPubsubHubTimeoutsOutputReference;

new WebPubsubHubTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

---



