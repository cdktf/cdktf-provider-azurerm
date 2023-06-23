# `azurerm_sentinel_automation_rule`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_automation_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule).

# `sentinelAutomationRule` Submodule <a name="`sentinelAutomationRule` Submodule" id="@cdktf/provider-azurerm.sentinelAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAutomationRule <a name="SentinelAutomationRule" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule azurerm_sentinel_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRule;

SentinelAutomationRule.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .order(java.lang.Number)
//  .actionIncident(IResolvable)
//  .actionIncident(java.util.List<SentinelAutomationRuleActionIncident>)
//  .actionPlaybook(IResolvable)
//  .actionPlaybook(java.util.List<SentinelAutomationRuleActionPlaybook>)
//  .condition(IResolvable)
//  .condition(java.util.List<SentinelAutomationRuleCondition>)
//  .conditionJson(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .expiration(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SentinelAutomationRuleTimeouts)
//  .triggersOn(java.lang.String)
//  .triggersWhen(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionIncident">actionIncident</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>></code> | action_incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionPlaybook">actionPlaybook</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>></code> | action_playbook block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.conditionJson">conditionJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.expiration">expiration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersOn">triggersOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersWhen">triggersWhen</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.order"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `actionIncident`<sup>Optional</sup> <a name="actionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionIncident"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>>

action_incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}

---

##### `actionPlaybook`<sup>Optional</sup> <a name="actionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionPlaybook"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>>

action_playbook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.condition"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#condition SentinelAutomationRule#condition}

---

##### `conditionJson`<sup>Optional</sup> <a name="conditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.conditionJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.expiration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}

---

##### `triggersOn`<sup>Optional</sup> <a name="triggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersOn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}.

---

##### `triggersWhen`<sup>Optional</sup> <a name="triggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersWhen"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident">putActionIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook">putActionPlaybook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionIncident">resetActionIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionPlaybook">resetActionPlaybook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetConditionJson">resetConditionJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersOn">resetTriggersOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersWhen">resetTriggersWhen</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putActionIncident` <a name="putActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident"></a>

```java
public void putActionIncident(IResolvable OR java.util.List<SentinelAutomationRuleActionIncident> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>>

---

##### `putActionPlaybook` <a name="putActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook"></a>

```java
public void putActionPlaybook(IResolvable OR java.util.List<SentinelAutomationRuleActionPlaybook> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<SentinelAutomationRuleCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts"></a>

```java
public void putTimeouts(SentinelAutomationRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

---

##### `resetActionIncident` <a name="resetActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionIncident"></a>

```java
public void resetActionIncident()
```

##### `resetActionPlaybook` <a name="resetActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionPlaybook"></a>

```java
public void resetActionPlaybook()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetConditionJson` <a name="resetConditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetConditionJson"></a>

```java
public void resetConditionJson()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggersOn` <a name="resetTriggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersOn"></a>

```java
public void resetTriggersOn()
```

##### `resetTriggersWhen` <a name="resetTriggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersWhen"></a>

```java
public void resetTriggersWhen()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRule;

SentinelAutomationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRule;

SentinelAutomationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRule;

SentinelAutomationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncident">actionIncident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList">SentinelAutomationRuleActionIncidentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybook">actionPlaybook</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList">SentinelAutomationRuleActionPlaybookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList">SentinelAutomationRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference">SentinelAutomationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncidentInput">actionIncidentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybookInput">actionPlaybookInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJsonInput">conditionJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expirationInput">expirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOnInput">triggersOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhenInput">triggersWhenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJson">conditionJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOn">triggersOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhen">triggersWhen</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionIncident`<sup>Required</sup> <a name="actionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncident"></a>

```java
public SentinelAutomationRuleActionIncidentList getActionIncident();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList">SentinelAutomationRuleActionIncidentList</a>

---

##### `actionPlaybook`<sup>Required</sup> <a name="actionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybook"></a>

```java
public SentinelAutomationRuleActionPlaybookList getActionPlaybook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList">SentinelAutomationRuleActionPlaybookList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.condition"></a>

```java
public SentinelAutomationRuleConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList">SentinelAutomationRuleConditionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeouts"></a>

```java
public SentinelAutomationRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference">SentinelAutomationRuleTimeoutsOutputReference</a>

---

##### `actionIncidentInput`<sup>Optional</sup> <a name="actionIncidentInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncidentInput"></a>

```java
public java.lang.Object getActionIncidentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>>

---

##### `actionPlaybookInput`<sup>Optional</sup> <a name="actionPlaybookInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybookInput"></a>

```java
public java.lang.Object getActionPlaybookInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>>

---

##### `conditionJsonInput`<sup>Optional</sup> <a name="conditionJsonInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJsonInput"></a>

```java
public java.lang.String getConditionJsonInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expirationInput"></a>

```java
public java.lang.String getExpirationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

---

##### `triggersOnInput`<sup>Optional</sup> <a name="triggersOnInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOnInput"></a>

```java
public java.lang.String getTriggersOnInput();
```

- *Type:* java.lang.String

---

##### `triggersWhenInput`<sup>Optional</sup> <a name="triggersWhenInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhenInput"></a>

```java
public java.lang.String getTriggersWhenInput();
```

- *Type:* java.lang.String

---

##### `conditionJson`<sup>Required</sup> <a name="conditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJson"></a>

```java
public java.lang.String getConditionJson();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `triggersOn`<sup>Required</sup> <a name="triggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOn"></a>

```java
public java.lang.String getTriggersOn();
```

- *Type:* java.lang.String

---

##### `triggersWhen`<sup>Required</sup> <a name="triggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhen"></a>

```java
public java.lang.String getTriggersWhen();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAutomationRuleActionIncident <a name="SentinelAutomationRuleActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleActionIncident;

SentinelAutomationRuleActionIncident.builder()
    .order(java.lang.Number)
//  .classification(java.lang.String)
//  .classificationComment(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .ownerId(java.lang.String)
//  .severity(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classificationComment">classificationComment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}. |

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}.

---

##### `classificationComment`<sup>Optional</sup> <a name="classificationComment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classificationComment"></a>

```java
public java.lang.String getClassificationComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}.

---

### SentinelAutomationRuleActionPlaybook <a name="SentinelAutomationRuleActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleActionPlaybook;

SentinelAutomationRuleActionPlaybook.builder()
    .logicAppId(java.lang.String)
    .order(java.lang.Number)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.logicAppId">logicAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}. |

---

##### `logicAppId`<sup>Required</sup> <a name="logicAppId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.logicAppId"></a>

```java
public java.lang.String getLogicAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}.

---

### SentinelAutomationRuleCondition <a name="SentinelAutomationRuleCondition" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleCondition;

SentinelAutomationRuleCondition.builder()
    .operator(java.lang.String)
    .property(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#operator SentinelAutomationRule#operator}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.property.property">property</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#property SentinelAutomationRule#property}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#values SentinelAutomationRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#operator SentinelAutomationRule#operator}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#property SentinelAutomationRule#property}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#values SentinelAutomationRule#values}.

---

### SentinelAutomationRuleConfig <a name="SentinelAutomationRuleConfig" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleConfig;

SentinelAutomationRuleConfig.builder()
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
    .displayName(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .order(java.lang.Number)
//  .actionIncident(IResolvable)
//  .actionIncident(java.util.List<SentinelAutomationRuleActionIncident>)
//  .actionPlaybook(IResolvable)
//  .actionPlaybook(java.util.List<SentinelAutomationRuleActionPlaybook>)
//  .condition(IResolvable)
//  .condition(java.util.List<SentinelAutomationRuleCondition>)
//  .conditionJson(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .expiration(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SentinelAutomationRuleTimeouts)
//  .triggersOn(java.lang.String)
//  .triggersWhen(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionIncident">actionIncident</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>></code> | action_incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionPlaybook">actionPlaybook</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>></code> | action_playbook block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.conditionJson">conditionJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.expiration">expiration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersOn">triggersOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersWhen">triggersWhen</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `actionIncident`<sup>Optional</sup> <a name="actionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionIncident"></a>

```java
public java.lang.Object getActionIncident();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>>

action_incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}

---

##### `actionPlaybook`<sup>Optional</sup> <a name="actionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionPlaybook"></a>

```java
public java.lang.Object getActionPlaybook();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>>

action_playbook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#condition SentinelAutomationRule#condition}

---

##### `conditionJson`<sup>Optional</sup> <a name="conditionJson" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.conditionJson"></a>

```java
public java.lang.String getConditionJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.timeouts"></a>

```java
public SentinelAutomationRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}

---

##### `triggersOn`<sup>Optional</sup> <a name="triggersOn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersOn"></a>

```java
public java.lang.String getTriggersOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}.

---

##### `triggersWhen`<sup>Optional</sup> <a name="triggersWhen" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersWhen"></a>

```java
public java.lang.String getTriggersWhen();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}.

---

### SentinelAutomationRuleTimeouts <a name="SentinelAutomationRuleTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleTimeouts;

SentinelAutomationRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAutomationRuleActionIncidentList <a name="SentinelAutomationRuleActionIncidentList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleActionIncidentList;

new SentinelAutomationRuleActionIncidentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get"></a>

```java
public SentinelAutomationRuleActionIncidentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>>

---


### SentinelAutomationRuleActionIncidentOutputReference <a name="SentinelAutomationRuleActionIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleActionIncidentOutputReference;

new SentinelAutomationRuleActionIncidentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassificationComment">resetClassificationComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassification"></a>

```java
public void resetClassification()
```

##### `resetClassificationComment` <a name="resetClassificationComment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassificationComment"></a>

```java
public void resetClassificationComment()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetOwnerId"></a>

```java
public void resetOwnerId()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationCommentInput">classificationCommentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationComment">classificationComment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationCommentInput`<sup>Optional</sup> <a name="classificationCommentInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationCommentInput"></a>

```java
public java.lang.String getClassificationCommentInput();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `classificationComment`<sup>Required</sup> <a name="classificationComment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationComment"></a>

```java
public java.lang.String getClassificationComment();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>

---


### SentinelAutomationRuleActionPlaybookList <a name="SentinelAutomationRuleActionPlaybookList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleActionPlaybookList;

new SentinelAutomationRuleActionPlaybookList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get"></a>

```java
public SentinelAutomationRuleActionPlaybookOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>>

---


### SentinelAutomationRuleActionPlaybookOutputReference <a name="SentinelAutomationRuleActionPlaybookOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleActionPlaybookOutputReference;

new SentinelAutomationRuleActionPlaybookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppIdInput">logicAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppId">logicAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logicAppIdInput`<sup>Optional</sup> <a name="logicAppIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppIdInput"></a>

```java
public java.lang.String getLogicAppIdInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `logicAppId`<sup>Required</sup> <a name="logicAppId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppId"></a>

```java
public java.lang.String getLogicAppId();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>

---


### SentinelAutomationRuleConditionList <a name="SentinelAutomationRuleConditionList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleConditionList;

new SentinelAutomationRuleConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.get"></a>

```java
public SentinelAutomationRuleConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>>

---


### SentinelAutomationRuleConditionOutputReference <a name="SentinelAutomationRuleConditionOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleConditionOutputReference;

new SentinelAutomationRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.property">property</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.propertyInput"></a>

```java
public java.lang.String getPropertyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleCondition">SentinelAutomationRuleCondition</a>

---


### SentinelAutomationRuleTimeoutsOutputReference <a name="SentinelAutomationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_automation_rule.SentinelAutomationRuleTimeoutsOutputReference;

new SentinelAutomationRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

---



