# `azurerm_eventhub_namespace_authorization_rule`

Refer to the Terraform Registory for docs: [`azurerm_eventhub_namespace_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule).

# `eventhubNamespaceAuthorizationRule` Submodule <a name="`eventhubNamespaceAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceAuthorizationRule <a name="EventhubNamespaceAuthorizationRule" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule azurerm_eventhub_namespace_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRule;

EventhubNamespaceAuthorizationRule.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .listen(java.lang.Boolean)
//  .listen(IResolvable)
//  .manage(java.lang.Boolean)
//  .manage(IResolvable)
//  .send(java.lang.Boolean)
//  .send(IResolvable)
//  .timeouts(EventhubNamespaceAuthorizationRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#name EventhubNamespaceAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#namespace_name EventhubNamespaceAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#resource_group_name EventhubNamespaceAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#id EventhubNamespaceAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#listen EventhubNamespaceAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#manage EventhubNamespaceAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#send EventhubNamespaceAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#name EventhubNamespaceAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.namespaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#namespace_name EventhubNamespaceAuthorizationRule#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#resource_group_name EventhubNamespaceAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#id EventhubNamespaceAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.listen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#listen EventhubNamespaceAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.manage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#manage EventhubNamespaceAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.send"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#send EventhubNamespaceAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#timeouts EventhubNamespaceAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetListen">resetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetManage">resetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetSend">resetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.putTimeouts"></a>

```java
public void putTimeouts(EventhubNamespaceAuthorizationRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetId"></a>

```java
public void resetId()
```

##### `resetListen` <a name="resetListen" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetListen"></a>

```java
public void resetListen()
```

##### `resetManage` <a name="resetManage" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetManage"></a>

```java
public void resetManage()
```

##### `resetSend` <a name="resetSend" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetSend"></a>

```java
public void resetSend()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRule;

EventhubNamespaceAuthorizationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRule;

EventhubNamespaceAuthorizationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRule;

EventhubNamespaceAuthorizationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference">EventhubNamespaceAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.listenInput">listenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.manageInput">manageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.sendInput">sendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.primaryConnectionStringAlias"></a>

```java
public java.lang.String getPrimaryConnectionStringAlias();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```java
public java.lang.String getSecondaryConnectionStringAlias();
```

- *Type:* java.lang.String

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.timeouts"></a>

```java
public EventhubNamespaceAuthorizationRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference">EventhubNamespaceAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenInput`<sup>Optional</sup> <a name="listenInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.listenInput"></a>

```java
public java.lang.Object getListenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manageInput`<sup>Optional</sup> <a name="manageInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.manageInput"></a>

```java
public java.lang.Object getManageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.sendInput"></a>

```java
public java.lang.Object getSendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.listen"></a>

```java
public java.lang.Object getListen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.manage"></a>

```java
public java.lang.Object getManage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.send"></a>

```java
public java.lang.Object getSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceAuthorizationRuleConfig <a name="EventhubNamespaceAuthorizationRuleConfig" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRuleConfig;

EventhubNamespaceAuthorizationRuleConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .listen(java.lang.Boolean)
//  .listen(IResolvable)
//  .manage(java.lang.Boolean)
//  .manage(IResolvable)
//  .send(java.lang.Boolean)
//  .send(IResolvable)
//  .timeouts(EventhubNamespaceAuthorizationRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#name EventhubNamespaceAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#namespace_name EventhubNamespaceAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#resource_group_name EventhubNamespaceAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#id EventhubNamespaceAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#listen EventhubNamespaceAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#manage EventhubNamespaceAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#send EventhubNamespaceAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#name EventhubNamespaceAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#namespace_name EventhubNamespaceAuthorizationRule#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#resource_group_name EventhubNamespaceAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#id EventhubNamespaceAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.listen"></a>

```java
public java.lang.Object getListen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#listen EventhubNamespaceAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.manage"></a>

```java
public java.lang.Object getManage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#manage EventhubNamespaceAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.send"></a>

```java
public java.lang.Object getSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#send EventhubNamespaceAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleConfig.property.timeouts"></a>

```java
public EventhubNamespaceAuthorizationRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#timeouts EventhubNamespaceAuthorizationRule#timeouts}

---

### EventhubNamespaceAuthorizationRuleTimeouts <a name="EventhubNamespaceAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRuleTimeouts;

EventhubNamespaceAuthorizationRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#create EventhubNamespaceAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#delete EventhubNamespaceAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#read EventhubNamespaceAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#update EventhubNamespaceAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#create EventhubNamespaceAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#delete EventhubNamespaceAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#read EventhubNamespaceAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/eventhub_namespace_authorization_rule#update EventhubNamespaceAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceAuthorizationRuleTimeoutsOutputReference <a name="EventhubNamespaceAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_authorization_rule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference;

new EventhubNamespaceAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceAuthorizationRule.EventhubNamespaceAuthorizationRuleTimeouts">EventhubNamespaceAuthorizationRuleTimeouts</a>

---



