# `azurerm_application_insights_smart_detection_rule`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_smart_detection_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule).

# `applicationInsightsSmartDetectionRule` Submodule <a name="`applicationInsightsSmartDetectionRule` Submodule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsSmartDetectionRule <a name="ApplicationInsightsSmartDetectionRule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule azurerm_application_insights_smart_detection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

new applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule(scope: Construct, id: string, config: ApplicationInsightsSmartDetectionRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig">ApplicationInsightsSmartDetectionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig">ApplicationInsightsSmartDetectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients">resetAdditionalEmailRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners">resetSendEmailsToSubscriptionOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsSmartDetectionRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

---

##### `resetAdditionalEmailRecipients` <a name="resetAdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients"></a>

```typescript
public resetAdditionalEmailRecipients(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSendEmailsToSubscriptionOwners` <a name="resetSendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners"></a>

```typescript
public resetSendEmailsToSubscriptionOwners(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput">additionalEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput">applicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput">sendEmailsToSubscriptionOwnersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients">additionalEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners">sendEmailsToSubscriptionOwners</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a>

---

##### `additionalEmailRecipientsInput`<sup>Optional</sup> <a name="additionalEmailRecipientsInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput"></a>

```typescript
public readonly additionalEmailRecipientsInput: string[];
```

- *Type:* string[]

---

##### `applicationInsightsIdInput`<sup>Optional</sup> <a name="applicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput"></a>

```typescript
public readonly applicationInsightsIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sendEmailsToSubscriptionOwnersInput`<sup>Optional</sup> <a name="sendEmailsToSubscriptionOwnersInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput"></a>

```typescript
public readonly sendEmailsToSubscriptionOwnersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationInsightsSmartDetectionRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a> | cdktf.IResolvable

---

##### `additionalEmailRecipients`<sup>Required</sup> <a name="additionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients"></a>

```typescript
public readonly additionalEmailRecipients: string[];
```

- *Type:* string[]

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sendEmailsToSubscriptionOwners`<sup>Required</sup> <a name="sendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners"></a>

```typescript
public readonly sendEmailsToSubscriptionOwners: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsSmartDetectionRuleConfig <a name="ApplicationInsightsSmartDetectionRuleConfig" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.Initializer"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

const applicationInsightsSmartDetectionRuleConfig: applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients">additionalEmailRecipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners">sendEmailsToSubscriptionOwners</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}.

---

##### `additionalEmailRecipients`<sup>Optional</sup> <a name="additionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients"></a>

```typescript
public readonly additionalEmailRecipients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendEmailsToSubscriptionOwners`<sup>Optional</sup> <a name="sendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners"></a>

```typescript
public readonly sendEmailsToSubscriptionOwners: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsSmartDetectionRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#timeouts ApplicationInsightsSmartDetectionRule#timeouts}

---

### ApplicationInsightsSmartDetectionRuleTimeouts <a name="ApplicationInsightsSmartDetectionRuleTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.Initializer"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

const applicationInsightsSmartDetectionRuleTimeouts: applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference <a name="ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsightsSmartDetectionRule } from '@cdktf/provider-azurerm'

new applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationInsightsSmartDetectionRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a> | cdktf.IResolvable

---



