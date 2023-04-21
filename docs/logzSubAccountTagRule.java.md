# `azurerm_logz_sub_account_tag_rule`

Refer to the Terraform Registory for docs: [`azurerm_logz_sub_account_tag_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule).

# `logzSubAccountTagRule` Submodule <a name="`logzSubAccountTagRule` Submodule" id="@cdktf/provider-azurerm.logzSubAccountTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogzSubAccountTagRule <a name="LogzSubAccountTagRule" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule azurerm_logz_sub_account_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRule;

LogzSubAccountTagRule.Builder.create(Construct scope, java.lang.String id)
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
    .logzSubAccountId(java.lang.String)
//  .id(java.lang.String)
//  .sendAadLogs(java.lang.Boolean)
//  .sendAadLogs(IResolvable)
//  .sendActivityLogs(java.lang.Boolean)
//  .sendActivityLogs(IResolvable)
//  .sendSubscriptionLogs(java.lang.Boolean)
//  .sendSubscriptionLogs(IResolvable)
//  .tagFilter(IResolvable)
//  .tagFilter(java.util.List<LogzSubAccountTagRuleTagFilter>)
//  .timeouts(LogzSubAccountTagRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.logzSubAccountId">logzSubAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendAadLogs">sendAadLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendActivityLogs">sendActivityLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.tagFilter">tagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>></code> | tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logzSubAccountId`<sup>Required</sup> <a name="logzSubAccountId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.logzSubAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendAadLogs`<sup>Optional</sup> <a name="sendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendAadLogs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}.

---

##### `sendActivityLogs`<sup>Optional</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendActivityLogs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}.

---

##### `sendSubscriptionLogs`<sup>Optional</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.sendSubscriptionLogs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.tagFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#tag_filter LogzSubAccountTagRule#tag_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#timeouts LogzSubAccountTagRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter">putTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendAadLogs">resetSendAadLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendActivityLogs">resetSendActivityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendSubscriptionLogs">resetSendSubscriptionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTagFilter">resetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTagFilter` <a name="putTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter"></a>

```java
public void putTagFilter(IResolvable OR java.util.List<LogzSubAccountTagRuleTagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts"></a>

```java
public void putTimeouts(LogzSubAccountTagRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetId"></a>

```java
public void resetId()
```

##### `resetSendAadLogs` <a name="resetSendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendAadLogs"></a>

```java
public void resetSendAadLogs()
```

##### `resetSendActivityLogs` <a name="resetSendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendActivityLogs"></a>

```java
public void resetSendActivityLogs()
```

##### `resetSendSubscriptionLogs` <a name="resetSendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendSubscriptionLogs"></a>

```java
public void resetSendSubscriptionLogs()
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTagFilter"></a>

```java
public void resetTagFilter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRule;

LogzSubAccountTagRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRule;

LogzSubAccountTagRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRule;

LogzSubAccountTagRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList">LogzSubAccountTagRuleTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference">LogzSubAccountTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountIdInput">logzSubAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogsInput">sendAadLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogsInput">sendActivityLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogsInput">sendSubscriptionLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilterInput">tagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountId">logzSubAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogs">sendAadLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogs">sendActivityLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilter"></a>

```java
public LogzSubAccountTagRuleTagFilterList getTagFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList">LogzSubAccountTagRuleTagFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeouts"></a>

```java
public LogzSubAccountTagRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference">LogzSubAccountTagRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logzSubAccountIdInput`<sup>Optional</sup> <a name="logzSubAccountIdInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountIdInput"></a>

```java
public java.lang.String getLogzSubAccountIdInput();
```

- *Type:* java.lang.String

---

##### `sendAadLogsInput`<sup>Optional</sup> <a name="sendAadLogsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogsInput"></a>

```java
public java.lang.Object getSendAadLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendActivityLogsInput`<sup>Optional</sup> <a name="sendActivityLogsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogsInput"></a>

```java
public java.lang.Object getSendActivityLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendSubscriptionLogsInput`<sup>Optional</sup> <a name="sendSubscriptionLogsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogsInput"></a>

```java
public java.lang.Object getSendSubscriptionLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilterInput"></a>

```java
public java.lang.Object getTagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logzSubAccountId`<sup>Required</sup> <a name="logzSubAccountId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountId"></a>

```java
public java.lang.String getLogzSubAccountId();
```

- *Type:* java.lang.String

---

##### `sendAadLogs`<sup>Required</sup> <a name="sendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogs"></a>

```java
public java.lang.Object getSendAadLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendActivityLogs`<sup>Required</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogs"></a>

```java
public java.lang.Object getSendActivityLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendSubscriptionLogs`<sup>Required</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogs"></a>

```java
public java.lang.Object getSendSubscriptionLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogzSubAccountTagRuleConfig <a name="LogzSubAccountTagRuleConfig" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRuleConfig;

LogzSubAccountTagRuleConfig.builder()
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
    .logzSubAccountId(java.lang.String)
//  .id(java.lang.String)
//  .sendAadLogs(java.lang.Boolean)
//  .sendAadLogs(IResolvable)
//  .sendActivityLogs(java.lang.Boolean)
//  .sendActivityLogs(IResolvable)
//  .sendSubscriptionLogs(java.lang.Boolean)
//  .sendSubscriptionLogs(IResolvable)
//  .tagFilter(IResolvable)
//  .tagFilter(java.util.List<LogzSubAccountTagRuleTagFilter>)
//  .timeouts(LogzSubAccountTagRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.logzSubAccountId">logzSubAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendAadLogs">sendAadLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendActivityLogs">sendActivityLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.tagFilter">tagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>></code> | tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logzSubAccountId`<sup>Required</sup> <a name="logzSubAccountId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.logzSubAccountId"></a>

```java
public java.lang.String getLogzSubAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendAadLogs`<sup>Optional</sup> <a name="sendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendAadLogs"></a>

```java
public java.lang.Object getSendAadLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}.

---

##### `sendActivityLogs`<sup>Optional</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendActivityLogs"></a>

```java
public java.lang.Object getSendActivityLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}.

---

##### `sendSubscriptionLogs`<sup>Optional</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendSubscriptionLogs"></a>

```java
public java.lang.Object getSendSubscriptionLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.tagFilter"></a>

```java
public java.lang.Object getTagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#tag_filter LogzSubAccountTagRule#tag_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.timeouts"></a>

```java
public LogzSubAccountTagRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#timeouts LogzSubAccountTagRule#timeouts}

---

### LogzSubAccountTagRuleTagFilter <a name="LogzSubAccountTagRuleTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRuleTagFilter;

LogzSubAccountTagRuleTagFilter.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#action LogzSubAccountTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#name LogzSubAccountTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#value LogzSubAccountTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#action LogzSubAccountTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#name LogzSubAccountTagRule#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#value LogzSubAccountTagRule#value}.

---

### LogzSubAccountTagRuleTimeouts <a name="LogzSubAccountTagRuleTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRuleTimeouts;

LogzSubAccountTagRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogzSubAccountTagRuleTagFilterList <a name="LogzSubAccountTagRuleTagFilterList" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRuleTagFilterList;

new LogzSubAccountTagRuleTagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get"></a>

```java
public LogzSubAccountTagRuleTagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a>>

---


### LogzSubAccountTagRuleTagFilterOutputReference <a name="LogzSubAccountTagRuleTagFilterOutputReference" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRuleTagFilterOutputReference;

new LogzSubAccountTagRuleTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter">LogzSubAccountTagRuleTagFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### LogzSubAccountTagRuleTimeoutsOutputReference <a name="LogzSubAccountTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logz_sub_account_tag_rule.LogzSubAccountTagRuleTimeoutsOutputReference;

new LogzSubAccountTagRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



