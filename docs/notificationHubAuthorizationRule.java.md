# `azurerm_notification_hub_authorization_rule`

Refer to the Terraform Registory for docs: [`azurerm_notification_hub_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule).

# `notificationHubAuthorizationRule` Submodule <a name="`notificationHubAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationHubAuthorizationRule <a name="NotificationHubAuthorizationRule" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule azurerm_notification_hub_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRule;

NotificationHubAuthorizationRule.Builder.create(Construct scope, java.lang.String id)
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
    .namespaceName(java.lang.String)
    .notificationHubName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .listen(java.lang.Boolean)
//  .listen(IResolvable)
//  .manage(java.lang.Boolean)
//  .manage(IResolvable)
//  .send(java.lang.Boolean)
//  .send(IResolvable)
//  .timeouts(NotificationHubAuthorizationRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.notificationHubName">notificationHubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.namespaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}.

---

##### `notificationHubName`<sup>Required</sup> <a name="notificationHubName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.notificationHubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.listen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.manage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.send"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#timeouts NotificationHubAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetListen">resetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetManage">resetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetSend">resetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts"></a>

```java
public void putTimeouts(NotificationHubAuthorizationRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetId"></a>

```java
public void resetId()
```

##### `resetListen` <a name="resetListen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetListen"></a>

```java
public void resetListen()
```

##### `resetManage` <a name="resetManage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetManage"></a>

```java
public void resetManage()
```

##### `resetSend` <a name="resetSend" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetSend"></a>

```java
public void resetSend()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRule;

NotificationHubAuthorizationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRule;

NotificationHubAuthorizationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRule;

NotificationHubAuthorizationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference">NotificationHubAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listenInput">listenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manageInput">manageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubNameInput">notificationHubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.sendInput">sendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubName">notificationHubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeouts"></a>

```java
public NotificationHubAuthorizationRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference">NotificationHubAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenInput`<sup>Optional</sup> <a name="listenInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listenInput"></a>

```java
public java.lang.Object getListenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manageInput`<sup>Optional</sup> <a name="manageInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manageInput"></a>

```java
public java.lang.Object getManageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `notificationHubNameInput`<sup>Optional</sup> <a name="notificationHubNameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubNameInput"></a>

```java
public java.lang.String getNotificationHubNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.sendInput"></a>

```java
public java.lang.Object getSendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listen"></a>

```java
public java.lang.Object getListen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manage"></a>

```java
public java.lang.Object getManage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `notificationHubName`<sup>Required</sup> <a name="notificationHubName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubName"></a>

```java
public java.lang.String getNotificationHubName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.send"></a>

```java
public java.lang.Object getSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationHubAuthorizationRuleConfig <a name="NotificationHubAuthorizationRuleConfig" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRuleConfig;

NotificationHubAuthorizationRuleConfig.builder()
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
    .namespaceName(java.lang.String)
    .notificationHubName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .listen(java.lang.Boolean)
//  .listen(IResolvable)
//  .manage(java.lang.Boolean)
//  .manage(IResolvable)
//  .send(java.lang.Boolean)
//  .send(IResolvable)
//  .timeouts(NotificationHubAuthorizationRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.notificationHubName">notificationHubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}.

---

##### `notificationHubName`<sup>Required</sup> <a name="notificationHubName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.notificationHubName"></a>

```java
public java.lang.String getNotificationHubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.listen"></a>

```java
public java.lang.Object getListen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.manage"></a>

```java
public java.lang.Object getManage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.send"></a>

```java
public java.lang.Object getSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.timeouts"></a>

```java
public NotificationHubAuthorizationRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#timeouts NotificationHubAuthorizationRule#timeouts}

---

### NotificationHubAuthorizationRuleTimeouts <a name="NotificationHubAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRuleTimeouts;

NotificationHubAuthorizationRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationHubAuthorizationRuleTimeoutsOutputReference <a name="NotificationHubAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.notification_hub_authorization_rule.NotificationHubAuthorizationRuleTimeoutsOutputReference;

new NotificationHubAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

---



