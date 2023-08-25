# `azurerm_relay_hybrid_connection_authorization_rule`

Refer to the Terraform Registory for docs: [`azurerm_relay_hybrid_connection_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule).

# `relayHybridConnectionAuthorizationRule` Submodule <a name="`relayHybridConnectionAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RelayHybridConnectionAuthorizationRule <a name="RelayHybridConnectionAuthorizationRule" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule azurerm_relay_hybrid_connection_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRule;

RelayHybridConnectionAuthorizationRule.Builder.create(Construct scope, java.lang.String id)
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
    .hybridConnectionName(java.lang.String)
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
//  .timeouts(RelayHybridConnectionAuthorizationRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.hybridConnectionName">hybridConnectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#hybrid_connection_name RelayHybridConnectionAuthorizationRule#hybrid_connection_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#name RelayHybridConnectionAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#namespace_name RelayHybridConnectionAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#resource_group_name RelayHybridConnectionAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#id RelayHybridConnectionAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#listen RelayHybridConnectionAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#manage RelayHybridConnectionAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#send RelayHybridConnectionAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hybridConnectionName`<sup>Required</sup> <a name="hybridConnectionName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.hybridConnectionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#hybrid_connection_name RelayHybridConnectionAuthorizationRule#hybrid_connection_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#name RelayHybridConnectionAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.namespaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#namespace_name RelayHybridConnectionAuthorizationRule#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#resource_group_name RelayHybridConnectionAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#id RelayHybridConnectionAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.listen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#listen RelayHybridConnectionAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.manage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#manage RelayHybridConnectionAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.send"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#send RelayHybridConnectionAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#timeouts RelayHybridConnectionAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetListen">resetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetManage">resetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetSend">resetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.putTimeouts"></a>

```java
public void putTimeouts(RelayHybridConnectionAuthorizationRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetId"></a>

```java
public void resetId()
```

##### `resetListen` <a name="resetListen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetListen"></a>

```java
public void resetListen()
```

##### `resetManage` <a name="resetManage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetManage"></a>

```java
public void resetManage()
```

##### `resetSend` <a name="resetSend" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetSend"></a>

```java
public void resetSend()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRule;

RelayHybridConnectionAuthorizationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRule;

RelayHybridConnectionAuthorizationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRule;

RelayHybridConnectionAuthorizationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference">RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionNameInput">hybridConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listenInput">listenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manageInput">manageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.sendInput">sendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionName">hybridConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeouts"></a>

```java
public RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference">RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference</a>

---

##### `hybridConnectionNameInput`<sup>Optional</sup> <a name="hybridConnectionNameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionNameInput"></a>

```java
public java.lang.String getHybridConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenInput`<sup>Optional</sup> <a name="listenInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listenInput"></a>

```java
public java.lang.Object getListenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manageInput`<sup>Optional</sup> <a name="manageInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manageInput"></a>

```java
public java.lang.Object getManageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.sendInput"></a>

```java
public java.lang.Object getSendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

---

##### `hybridConnectionName`<sup>Required</sup> <a name="hybridConnectionName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionName"></a>

```java
public java.lang.String getHybridConnectionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listen"></a>

```java
public java.lang.Object getListen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manage"></a>

```java
public java.lang.Object getManage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.send"></a>

```java
public java.lang.Object getSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RelayHybridConnectionAuthorizationRuleConfig <a name="RelayHybridConnectionAuthorizationRuleConfig" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRuleConfig;

RelayHybridConnectionAuthorizationRuleConfig.builder()
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
    .hybridConnectionName(java.lang.String)
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
//  .timeouts(RelayHybridConnectionAuthorizationRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.hybridConnectionName">hybridConnectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#hybrid_connection_name RelayHybridConnectionAuthorizationRule#hybrid_connection_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#name RelayHybridConnectionAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#namespace_name RelayHybridConnectionAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#resource_group_name RelayHybridConnectionAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#id RelayHybridConnectionAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.listen">listen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#listen RelayHybridConnectionAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.manage">manage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#manage RelayHybridConnectionAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.send">send</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#send RelayHybridConnectionAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hybridConnectionName`<sup>Required</sup> <a name="hybridConnectionName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.hybridConnectionName"></a>

```java
public java.lang.String getHybridConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#hybrid_connection_name RelayHybridConnectionAuthorizationRule#hybrid_connection_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#name RelayHybridConnectionAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#namespace_name RelayHybridConnectionAuthorizationRule#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#resource_group_name RelayHybridConnectionAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#id RelayHybridConnectionAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.listen"></a>

```java
public java.lang.Object getListen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#listen RelayHybridConnectionAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.manage"></a>

```java
public java.lang.Object getManage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#manage RelayHybridConnectionAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.send"></a>

```java
public java.lang.Object getSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#send RelayHybridConnectionAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.timeouts"></a>

```java
public RelayHybridConnectionAuthorizationRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#timeouts RelayHybridConnectionAuthorizationRule#timeouts}

---

### RelayHybridConnectionAuthorizationRuleTimeouts <a name="RelayHybridConnectionAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRuleTimeouts;

RelayHybridConnectionAuthorizationRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#create RelayHybridConnectionAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#delete RelayHybridConnectionAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#read RelayHybridConnectionAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#update RelayHybridConnectionAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#create RelayHybridConnectionAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#delete RelayHybridConnectionAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#read RelayHybridConnectionAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/relay_hybrid_connection_authorization_rule#update RelayHybridConnectionAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference <a name="RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.relay_hybrid_connection_authorization_rule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference;

new RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

---



