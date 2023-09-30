# `azurerm_cognitive_account`

Refer to the Terraform Registory for docs: [`azurerm_cognitive_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account).

# `cognitiveAccount` Submodule <a name="`cognitiveAccount` Submodule" id="@cdktf/provider-azurerm.cognitiveAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccount <a name="CognitiveAccount" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account azurerm_cognitive_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccount(scope: Construct, id: string, config: CognitiveAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig">CognitiveAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig">CognitiveAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls">putNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceId">resetCustomQuestionAnsweringSearchServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceKey">resetCustomQuestionAnsweringSearchServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomSubdomainName">resetCustomSubdomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetDynamicThrottlingEnabled">resetDynamicThrottlingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetFqdns">resetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadClientId">resetMetricsAdvisorAadClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadTenantId">resetMetricsAdvisorAadTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorSuperUserName">resetMetricsAdvisorSuperUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorWebsiteName">resetMetricsAdvisorWebsiteName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetNetworkAcls">resetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOutboundNetworkAccessRestricted">resetOutboundNetworkAccessRestricted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetQnaRuntimeEndpoint">resetQnaRuntimeEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: CognitiveAccountCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity"></a>

```typescript
public putIdentity(value: CognitiveAccountIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---

##### `putNetworkAcls` <a name="putNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls"></a>

```typescript
public putNetworkAcls(value: CognitiveAccountNetworkAcls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage"></a>

```typescript
public putStorage(value: IResolvable | CognitiveAccountStorage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: CognitiveAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

---

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetCustomQuestionAnsweringSearchServiceId` <a name="resetCustomQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceId"></a>

```typescript
public resetCustomQuestionAnsweringSearchServiceId(): void
```

##### `resetCustomQuestionAnsweringSearchServiceKey` <a name="resetCustomQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceKey"></a>

```typescript
public resetCustomQuestionAnsweringSearchServiceKey(): void
```

##### `resetCustomSubdomainName` <a name="resetCustomSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomSubdomainName"></a>

```typescript
public resetCustomSubdomainName(): void
```

##### `resetDynamicThrottlingEnabled` <a name="resetDynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetDynamicThrottlingEnabled"></a>

```typescript
public resetDynamicThrottlingEnabled(): void
```

##### `resetFqdns` <a name="resetFqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetFqdns"></a>

```typescript
public resetFqdns(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetLocalAuthEnabled"></a>

```typescript
public resetLocalAuthEnabled(): void
```

##### `resetMetricsAdvisorAadClientId` <a name="resetMetricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadClientId"></a>

```typescript
public resetMetricsAdvisorAadClientId(): void
```

##### `resetMetricsAdvisorAadTenantId` <a name="resetMetricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadTenantId"></a>

```typescript
public resetMetricsAdvisorAadTenantId(): void
```

##### `resetMetricsAdvisorSuperUserName` <a name="resetMetricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorSuperUserName"></a>

```typescript
public resetMetricsAdvisorSuperUserName(): void
```

##### `resetMetricsAdvisorWebsiteName` <a name="resetMetricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorWebsiteName"></a>

```typescript
public resetMetricsAdvisorWebsiteName(): void
```

##### `resetNetworkAcls` <a name="resetNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetNetworkAcls"></a>

```typescript
public resetNetworkAcls(): void
```

##### `resetOutboundNetworkAccessRestricted` <a name="resetOutboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOutboundNetworkAccessRestricted"></a>

```typescript
public resetOutboundNetworkAccessRestricted(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetQnaRuntimeEndpoint` <a name="resetQnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetQnaRuntimeEndpoint"></a>

```typescript
public resetQnaRuntimeEndpoint(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

cognitiveAccount.CognitiveAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

cognitiveAccount.CognitiveAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

cognitiveAccount.CognitiveAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference">CognitiveAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference">CognitiveAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference">CognitiveAccountNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList">CognitiveAccountStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference">CognitiveAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceIdInput">customQuestionAnsweringSearchServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKeyInput">customQuestionAnsweringSearchServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainNameInput">customSubdomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabledInput">dynamicThrottlingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdnsInput">fqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientIdInput">metricsAdvisorAadClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantIdInput">metricsAdvisorAadTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserNameInput">metricsAdvisorSuperUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteNameInput">metricsAdvisorWebsiteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAclsInput">networkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestrictedInput">outboundNetworkAccessRestrictedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpointInput">qnaRuntimeEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storageInput">storageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceId">customQuestionAnsweringSearchServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKey">customQuestionAnsweringSearchServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainName">customSubdomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabled">dynamicThrottlingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientId">metricsAdvisorAadClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantId">metricsAdvisorAadTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserName">metricsAdvisorSuperUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteName">metricsAdvisorWebsiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpoint">qnaRuntimeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: CognitiveAccountCustomerManagedKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference">CognitiveAccountCustomerManagedKeyOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identity"></a>

```typescript
public readonly identity: CognitiveAccountIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference">CognitiveAccountIdentityOutputReference</a>

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAcls"></a>

```typescript
public readonly networkAcls: CognitiveAccountNetworkAclsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference">CognitiveAccountNetworkAclsOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storage"></a>

```typescript
public readonly storage: CognitiveAccountStorageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList">CognitiveAccountStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference">CognitiveAccountTimeoutsOutputReference</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: CognitiveAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---

##### `customQuestionAnsweringSearchServiceIdInput`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceIdInput"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceIdInput: string;
```

- *Type:* string

---

##### `customQuestionAnsweringSearchServiceKeyInput`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceKeyInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKeyInput"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceKeyInput: string;
```

- *Type:* string

---

##### `customSubdomainNameInput`<sup>Optional</sup> <a name="customSubdomainNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainNameInput"></a>

```typescript
public readonly customSubdomainNameInput: string;
```

- *Type:* string

---

##### `dynamicThrottlingEnabledInput`<sup>Optional</sup> <a name="dynamicThrottlingEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabledInput"></a>

```typescript
public readonly dynamicThrottlingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fqdnsInput`<sup>Optional</sup> <a name="fqdnsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdnsInput"></a>

```typescript
public readonly fqdnsInput: string[];
```

- *Type:* string[]

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identityInput"></a>

```typescript
public readonly identityInput: CognitiveAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabledInput"></a>

```typescript
public readonly localAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metricsAdvisorAadClientIdInput`<sup>Optional</sup> <a name="metricsAdvisorAadClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientIdInput"></a>

```typescript
public readonly metricsAdvisorAadClientIdInput: string;
```

- *Type:* string

---

##### `metricsAdvisorAadTenantIdInput`<sup>Optional</sup> <a name="metricsAdvisorAadTenantIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantIdInput"></a>

```typescript
public readonly metricsAdvisorAadTenantIdInput: string;
```

- *Type:* string

---

##### `metricsAdvisorSuperUserNameInput`<sup>Optional</sup> <a name="metricsAdvisorSuperUserNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserNameInput"></a>

```typescript
public readonly metricsAdvisorSuperUserNameInput: string;
```

- *Type:* string

---

##### `metricsAdvisorWebsiteNameInput`<sup>Optional</sup> <a name="metricsAdvisorWebsiteNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteNameInput"></a>

```typescript
public readonly metricsAdvisorWebsiteNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAclsInput`<sup>Optional</sup> <a name="networkAclsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAclsInput"></a>

```typescript
public readonly networkAclsInput: CognitiveAccountNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---

##### `outboundNetworkAccessRestrictedInput`<sup>Optional</sup> <a name="outboundNetworkAccessRestrictedInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestrictedInput"></a>

```typescript
public readonly outboundNetworkAccessRestrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qnaRuntimeEndpointInput`<sup>Optional</sup> <a name="qnaRuntimeEndpointInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpointInput"></a>

```typescript
public readonly qnaRuntimeEndpointInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storageInput"></a>

```typescript
public readonly storageInput: IResolvable | CognitiveAccountStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CognitiveAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

---

##### `customQuestionAnsweringSearchServiceId`<sup>Required</sup> <a name="customQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceId"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceId: string;
```

- *Type:* string

---

##### `customQuestionAnsweringSearchServiceKey`<sup>Required</sup> <a name="customQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKey"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceKey: string;
```

- *Type:* string

---

##### `customSubdomainName`<sup>Required</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainName"></a>

```typescript
public readonly customSubdomainName: string;
```

- *Type:* string

---

##### `dynamicThrottlingEnabled`<sup>Required</sup> <a name="dynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabled"></a>

```typescript
public readonly dynamicThrottlingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metricsAdvisorAadClientId`<sup>Required</sup> <a name="metricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientId"></a>

```typescript
public readonly metricsAdvisorAadClientId: string;
```

- *Type:* string

---

##### `metricsAdvisorAadTenantId`<sup>Required</sup> <a name="metricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantId"></a>

```typescript
public readonly metricsAdvisorAadTenantId: string;
```

- *Type:* string

---

##### `metricsAdvisorSuperUserName`<sup>Required</sup> <a name="metricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserName"></a>

```typescript
public readonly metricsAdvisorSuperUserName: string;
```

- *Type:* string

---

##### `metricsAdvisorWebsiteName`<sup>Required</sup> <a name="metricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteName"></a>

```typescript
public readonly metricsAdvisorWebsiteName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outboundNetworkAccessRestricted`<sup>Required</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qnaRuntimeEndpoint`<sup>Required</sup> <a name="qnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpoint"></a>

```typescript
public readonly qnaRuntimeEndpoint: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConfig <a name="CognitiveAccountConfig" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountConfig: cognitiveAccount.CognitiveAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#location CognitiveAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#name CognitiveAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceId">customQuestionAnsweringSearchServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceKey">customQuestionAnsweringSearchServiceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customSubdomainName">customSubdomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dynamicThrottlingEnabled">dynamicThrottlingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.fqdns">fqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#id CognitiveAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadClientId">metricsAdvisorAadClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadTenantId">metricsAdvisorAadTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorSuperUserName">metricsAdvisorSuperUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorWebsiteName">metricsAdvisorWebsiteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.qnaRuntimeEndpoint">qnaRuntimeEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.storage">storage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]</code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#location CognitiveAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#name CognitiveAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: CognitiveAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#customer_managed_key CognitiveAccount#customer_managed_key}

---

##### `customQuestionAnsweringSearchServiceId`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceId"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}.

---

##### `customQuestionAnsweringSearchServiceKey`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceKey"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}.

---

##### `customSubdomainName`<sup>Optional</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customSubdomainName"></a>

```typescript
public readonly customSubdomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}.

---

##### `dynamicThrottlingEnabled`<sup>Optional</sup> <a name="dynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dynamicThrottlingEnabled"></a>

```typescript
public readonly dynamicThrottlingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#id CognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.identity"></a>

```typescript
public readonly identity: CognitiveAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity CognitiveAccount#identity}

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}.

---

##### `metricsAdvisorAadClientId`<sup>Optional</sup> <a name="metricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadClientId"></a>

```typescript
public readonly metricsAdvisorAadClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}.

---

##### `metricsAdvisorAadTenantId`<sup>Optional</sup> <a name="metricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadTenantId"></a>

```typescript
public readonly metricsAdvisorAadTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}.

---

##### `metricsAdvisorSuperUserName`<sup>Optional</sup> <a name="metricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorSuperUserName"></a>

```typescript
public readonly metricsAdvisorSuperUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}.

---

##### `metricsAdvisorWebsiteName`<sup>Optional</sup> <a name="metricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorWebsiteName"></a>

```typescript
public readonly metricsAdvisorWebsiteName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}.

---

##### `networkAcls`<sup>Optional</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.networkAcls"></a>

```typescript
public readonly networkAcls: CognitiveAccountNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#network_acls CognitiveAccount#network_acls}

---

##### `outboundNetworkAccessRestricted`<sup>Optional</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}.

---

##### `qnaRuntimeEndpoint`<sup>Optional</sup> <a name="qnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.qnaRuntimeEndpoint"></a>

```typescript
public readonly qnaRuntimeEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.storage"></a>

```typescript
public readonly storage: IResolvable | CognitiveAccountStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#storage CognitiveAccount#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#timeouts CognitiveAccount#timeouts}

---

### CognitiveAccountCustomerManagedKey <a name="CognitiveAccountCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountCustomerManagedKey: cognitiveAccount.CognitiveAccountCustomerManagedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.identityClientId">identityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}.

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}.

---

### CognitiveAccountIdentity <a name="CognitiveAccountIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountIdentity: cognitiveAccount.CognitiveAccountIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#type CognitiveAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#type CognitiveAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}.

---

### CognitiveAccountNetworkAcls <a name="CognitiveAccountNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountNetworkAcls: cognitiveAccount.CognitiveAccountNetworkAcls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.ipRules">ipRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]</code> | virtual_network_rules block. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}.

---

##### `virtualNetworkRules`<sup>Optional</sup> <a name="virtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.virtualNetworkRules"></a>

```typescript
public readonly virtualNetworkRules: IResolvable | CognitiveAccountNetworkAclsVirtualNetworkRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]

virtual_network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#virtual_network_rules CognitiveAccount#virtual_network_rules}

---

### CognitiveAccountNetworkAclsVirtualNetworkRules <a name="CognitiveAccountNetworkAclsVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountNetworkAclsVirtualNetworkRules: cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}.

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}.

---

### CognitiveAccountStorage <a name="CognitiveAccountStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountStorage: cognitiveAccount.CognitiveAccountStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.identityClientId">identityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}. |

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}.

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}.

---

### CognitiveAccountTimeouts <a name="CognitiveAccountTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

const cognitiveAccountTimeouts: cognitiveAccount.CognitiveAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#create CognitiveAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#read CognitiveAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#update CognitiveAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#create CognitiveAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#read CognitiveAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/cognitive_account#update CognitiveAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountCustomerManagedKeyOutputReference <a name="CognitiveAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resetIdentityClientId"></a>

```typescript
public resetIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientIdInput"></a>

```typescript
public readonly identityClientIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitiveAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---


### CognitiveAccountIdentityOutputReference <a name="CognitiveAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitiveAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---


### CognitiveAccountNetworkAclsOutputReference <a name="CognitiveAccountNetworkAclsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountNetworkAclsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules">putVirtualNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetVirtualNetworkRules">resetVirtualNetworkRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualNetworkRules` <a name="putVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules"></a>

```typescript
public putVirtualNetworkRules(value: IResolvable | CognitiveAccountNetworkAclsVirtualNetworkRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]

---

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetIpRules"></a>

```typescript
public resetIpRules(): void
```

##### `resetVirtualNetworkRules` <a name="resetVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetVirtualNetworkRules"></a>

```typescript
public resetVirtualNetworkRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList">CognitiveAccountNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRulesInput">virtualNetworkRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRules">ipRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNetworkRules`<sup>Required</sup> <a name="virtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```typescript
public readonly virtualNetworkRules: CognitiveAccountNetworkAclsVirtualNetworkRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList">CognitiveAccountNetworkAclsVirtualNetworkRulesList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRulesInput"></a>

```typescript
public readonly ipRulesInput: string[];
```

- *Type:* string[]

---

##### `virtualNetworkRulesInput`<sup>Optional</sup> <a name="virtualNetworkRulesInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRulesInput"></a>

```typescript
public readonly virtualNetworkRulesInput: IResolvable | CognitiveAccountNetworkAclsVirtualNetworkRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitiveAccountNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---


### CognitiveAccountNetworkAclsVirtualNetworkRulesList <a name="CognitiveAccountNetworkAclsVirtualNetworkRulesList" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get"></a>

```typescript
public get(index: number): CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountNetworkAclsVirtualNetworkRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>[]

---


### CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference <a name="CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">resetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVnetServiceEndpoint` <a name="resetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```typescript
public resetIgnoreMissingVnetServiceEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignoreMissingVnetServiceEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountNetworkAclsVirtualNetworkRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>

---


### CognitiveAccountStorageList <a name="CognitiveAccountStorageList" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get"></a>

```typescript
public get(index: number): CognitiveAccountStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>[]

---


### CognitiveAccountStorageOutputReference <a name="CognitiveAccountStorageOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resetIdentityClientId"></a>

```typescript
public resetIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientIdInput"></a>

```typescript
public readonly identityClientIdInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountStorage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>

---


### CognitiveAccountTimeoutsOutputReference <a name="CognitiveAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccount } from '@cdktf/provider-azurerm'

new cognitiveAccount.CognitiveAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

---



