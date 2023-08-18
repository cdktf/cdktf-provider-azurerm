# `azurerm_application_insights_standard_web_test`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_standard_web_test`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test).

# `applicationInsightsStandardWebTest` Submodule <a name="`applicationInsightsStandardWebTest` Submodule" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsStandardWebTest <a name="ApplicationInsightsStandardWebTest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test azurerm_application_insights_standard_web_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest(scope: Construct, id: string, config: ApplicationInsightsStandardWebTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig">ApplicationInsightsStandardWebTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig">ApplicationInsightsStandardWebTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules">putValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetRetryEnabled">resetRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetValidationRules">resetValidationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRequest` <a name="putRequest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest"></a>

```typescript
public putRequest(value: ApplicationInsightsStandardWebTestRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsStandardWebTestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---

##### `putValidationRules` <a name="putValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules"></a>

```typescript
public putValidationRules(value: ApplicationInsightsStandardWebTestValidationRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetryEnabled` <a name="resetRetryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetRetryEnabled"></a>

```typescript
public resetRetryEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationRules` <a name="resetValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetValidationRules"></a>

```typescript
public resetValidationRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference">ApplicationInsightsStandardWebTestRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.syntheticMonitorId">syntheticMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference">ApplicationInsightsStandardWebTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRules">validationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference">ApplicationInsightsStandardWebTestValidationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsIdInput">applicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequencyInput">frequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocationsInput">geoLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.requestInput">requestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabledInput">retryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRulesInput">validationRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequency">frequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocations">geoLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabled">retryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.request"></a>

```typescript
public readonly request: ApplicationInsightsStandardWebTestRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference">ApplicationInsightsStandardWebTestRequestOutputReference</a>

---

##### `syntheticMonitorId`<sup>Required</sup> <a name="syntheticMonitorId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.syntheticMonitorId"></a>

```typescript
public readonly syntheticMonitorId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsStandardWebTestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference">ApplicationInsightsStandardWebTestTimeoutsOutputReference</a>

---

##### `validationRules`<sup>Required</sup> <a name="validationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRules"></a>

```typescript
public readonly validationRules: ApplicationInsightsStandardWebTestValidationRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference">ApplicationInsightsStandardWebTestValidationRulesOutputReference</a>

---

##### `applicationInsightsIdInput`<sup>Optional</sup> <a name="applicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsIdInput"></a>

```typescript
public readonly applicationInsightsIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: number;
```

- *Type:* number

---

##### `geoLocationsInput`<sup>Optional</sup> <a name="geoLocationsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocationsInput"></a>

```typescript
public readonly geoLocationsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.requestInput"></a>

```typescript
public readonly requestInput: ApplicationInsightsStandardWebTestRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `retryEnabledInput`<sup>Optional</sup> <a name="retryEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabledInput"></a>

```typescript
public readonly retryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationInsightsStandardWebTestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---

##### `validationRulesInput`<sup>Optional</sup> <a name="validationRulesInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRulesInput"></a>

```typescript
public readonly validationRulesInput: ApplicationInsightsStandardWebTestValidationRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocations"></a>

```typescript
public readonly geoLocations: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `retryEnabled`<sup>Required</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabled"></a>

```typescript
public readonly retryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsStandardWebTestConfig <a name="ApplicationInsightsStandardWebTestConfig" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsStandardWebTestConfig: applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.geoLocations">geoLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.frequency">frequency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.retryEnabled">retryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.validationRules">validationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | validation_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}.

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.geoLocations"></a>

```typescript
public readonly geoLocations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.request"></a>

```typescript
public readonly request: ApplicationInsightsStandardWebTestRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#request ApplicationInsightsStandardWebTest#request}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryEnabled`<sup>Optional</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.retryEnabled"></a>

```typescript
public readonly retryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsStandardWebTestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#timeouts ApplicationInsightsStandardWebTest#timeouts}

---

##### `validationRules`<sup>Optional</sup> <a name="validationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.validationRules"></a>

```typescript
public readonly validationRules: ApplicationInsightsStandardWebTestValidationRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

validation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#validation_rules ApplicationInsightsStandardWebTest#validation_rules}

---

### ApplicationInsightsStandardWebTestRequest <a name="ApplicationInsightsStandardWebTestRequest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsStandardWebTestRequest: applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.followRedirectsEnabled">followRedirectsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.httpVerb">httpVerb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.parseDependentRequestsEnabled">parseDependentRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}.

---

##### `followRedirectsEnabled`<sup>Optional</sup> <a name="followRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.followRedirectsEnabled"></a>

```typescript
public readonly followRedirectsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.header"></a>

```typescript
public readonly header: IResolvable | ApplicationInsightsStandardWebTestRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#header ApplicationInsightsStandardWebTest#header}

---

##### `httpVerb`<sup>Optional</sup> <a name="httpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.httpVerb"></a>

```typescript
public readonly httpVerb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}.

---

##### `parseDependentRequestsEnabled`<sup>Optional</sup> <a name="parseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.parseDependentRequestsEnabled"></a>

```typescript
public readonly parseDependentRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}.

---

### ApplicationInsightsStandardWebTestRequestHeader <a name="ApplicationInsightsStandardWebTestRequestHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsStandardWebTestRequestHeader: applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}.

---

### ApplicationInsightsStandardWebTestTimeouts <a name="ApplicationInsightsStandardWebTestTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsStandardWebTestTimeouts: applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}.

---

### ApplicationInsightsStandardWebTestValidationRules <a name="ApplicationInsightsStandardWebTestValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsStandardWebTestValidationRules: applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.content">content</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | content block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.expectedStatusCode">expectedStatusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCertRemainingLifetime">sslCertRemainingLifetime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCheckEnabled">sslCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.content"></a>

```typescript
public readonly content: ApplicationInsightsStandardWebTestValidationRulesContent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#content ApplicationInsightsStandardWebTest#content}

---

##### `expectedStatusCode`<sup>Optional</sup> <a name="expectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.expectedStatusCode"></a>

```typescript
public readonly expectedStatusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}.

---

##### `sslCertRemainingLifetime`<sup>Optional</sup> <a name="sslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCertRemainingLifetime"></a>

```typescript
public readonly sslCertRemainingLifetime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}.

---

##### `sslCheckEnabled`<sup>Optional</sup> <a name="sslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCheckEnabled"></a>

```typescript
public readonly sslCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}.

---

### ApplicationInsightsStandardWebTestValidationRulesContent <a name="ApplicationInsightsStandardWebTestValidationRulesContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsStandardWebTestValidationRulesContent: applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.contentMatch">contentMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.passIfTextFound">passIfTextFound</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}. |

---

##### `contentMatch`<sup>Required</sup> <a name="contentMatch" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.contentMatch"></a>

```typescript
public readonly contentMatch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}.

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}.

---

##### `passIfTextFound`<sup>Optional</sup> <a name="passIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.passIfTextFound"></a>

```typescript
public readonly passIfTextFound: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsStandardWebTestRequestHeaderList <a name="ApplicationInsightsStandardWebTestRequestHeaderList" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get"></a>

```typescript
public get(index: number): ApplicationInsightsStandardWebTestRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsStandardWebTestRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]

---


### ApplicationInsightsStandardWebTestRequestHeaderOutputReference <a name="ApplicationInsightsStandardWebTestRequestHeaderOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsStandardWebTestRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>

---


### ApplicationInsightsStandardWebTestRequestOutputReference <a name="ApplicationInsightsStandardWebTestRequestOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetFollowRedirectsEnabled">resetFollowRedirectsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHttpVerb">resetHttpVerb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetParseDependentRequestsEnabled">resetParseDependentRequestsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ApplicationInsightsStandardWebTestRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetFollowRedirectsEnabled` <a name="resetFollowRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetFollowRedirectsEnabled"></a>

```typescript
public resetFollowRedirectsEnabled(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHttpVerb` <a name="resetHttpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHttpVerb"></a>

```typescript
public resetHttpVerb(): void
```

##### `resetParseDependentRequestsEnabled` <a name="resetParseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetParseDependentRequestsEnabled"></a>

```typescript
public resetParseDependentRequestsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList">ApplicationInsightsStandardWebTestRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabledInput">followRedirectsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerbInput">httpVerbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabledInput">parseDependentRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabled">followRedirectsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerb">httpVerb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabled">parseDependentRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.header"></a>

```typescript
public readonly header: ApplicationInsightsStandardWebTestRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList">ApplicationInsightsStandardWebTestRequestHeaderList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `followRedirectsEnabledInput`<sup>Optional</sup> <a name="followRedirectsEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabledInput"></a>

```typescript
public readonly followRedirectsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ApplicationInsightsStandardWebTestRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>[]

---

##### `httpVerbInput`<sup>Optional</sup> <a name="httpVerbInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerbInput"></a>

```typescript
public readonly httpVerbInput: string;
```

- *Type:* string

---

##### `parseDependentRequestsEnabledInput`<sup>Optional</sup> <a name="parseDependentRequestsEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabledInput"></a>

```typescript
public readonly parseDependentRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `followRedirectsEnabled`<sup>Required</sup> <a name="followRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabled"></a>

```typescript
public readonly followRedirectsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpVerb`<sup>Required</sup> <a name="httpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerb"></a>

```typescript
public readonly httpVerb: string;
```

- *Type:* string

---

##### `parseDependentRequestsEnabled`<sup>Required</sup> <a name="parseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabled"></a>

```typescript
public readonly parseDependentRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationInsightsStandardWebTestRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---


### ApplicationInsightsStandardWebTestTimeoutsOutputReference <a name="ApplicationInsightsStandardWebTestTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsStandardWebTestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---


### ApplicationInsightsStandardWebTestValidationRulesContentOutputReference <a name="ApplicationInsightsStandardWebTestValidationRulesContentOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetPassIfTextFound">resetPassIfTextFound</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetPassIfTextFound` <a name="resetPassIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetPassIfTextFound"></a>

```typescript
public resetPassIfTextFound(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatchInput">contentMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFoundInput">passIfTextFoundInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatch">contentMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFound">passIfTextFound</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentMatchInput`<sup>Optional</sup> <a name="contentMatchInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatchInput"></a>

```typescript
public readonly contentMatchInput: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passIfTextFoundInput`<sup>Optional</sup> <a name="passIfTextFoundInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFoundInput"></a>

```typescript
public readonly passIfTextFoundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentMatch`<sup>Required</sup> <a name="contentMatch" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatch"></a>

```typescript
public readonly contentMatch: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passIfTextFound`<sup>Required</sup> <a name="passIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFound"></a>

```typescript
public readonly passIfTextFound: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationInsightsStandardWebTestValidationRulesContent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---


### ApplicationInsightsStandardWebTestValidationRulesOutputReference <a name="ApplicationInsightsStandardWebTestValidationRulesOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer"></a>

```typescript
import { applicationInsightsStandardWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetExpectedStatusCode">resetExpectedStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCertRemainingLifetime">resetSslCertRemainingLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCheckEnabled">resetSslCheckEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent"></a>

```typescript
public putContent(value: ApplicationInsightsStandardWebTestValidationRulesContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetExpectedStatusCode` <a name="resetExpectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetExpectedStatusCode"></a>

```typescript
public resetExpectedStatusCode(): void
```

##### `resetSslCertRemainingLifetime` <a name="resetSslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCertRemainingLifetime"></a>

```typescript
public resetSslCertRemainingLifetime(): void
```

##### `resetSslCheckEnabled` <a name="resetSslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCheckEnabled"></a>

```typescript
public resetSslCheckEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.content">content</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference">ApplicationInsightsStandardWebTestValidationRulesContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.contentInput">contentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCodeInput">expectedStatusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetimeInput">sslCertRemainingLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabledInput">sslCheckEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCode">expectedStatusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetime">sslCertRemainingLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabled">sslCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.content"></a>

```typescript
public readonly content: ApplicationInsightsStandardWebTestValidationRulesContentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference">ApplicationInsightsStandardWebTestValidationRulesContentOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: ApplicationInsightsStandardWebTestValidationRulesContent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---

##### `expectedStatusCodeInput`<sup>Optional</sup> <a name="expectedStatusCodeInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCodeInput"></a>

```typescript
public readonly expectedStatusCodeInput: number;
```

- *Type:* number

---

##### `sslCertRemainingLifetimeInput`<sup>Optional</sup> <a name="sslCertRemainingLifetimeInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetimeInput"></a>

```typescript
public readonly sslCertRemainingLifetimeInput: number;
```

- *Type:* number

---

##### `sslCheckEnabledInput`<sup>Optional</sup> <a name="sslCheckEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabledInput"></a>

```typescript
public readonly sslCheckEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expectedStatusCode`<sup>Required</sup> <a name="expectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCode"></a>

```typescript
public readonly expectedStatusCode: number;
```

- *Type:* number

---

##### `sslCertRemainingLifetime`<sup>Required</sup> <a name="sslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetime"></a>

```typescript
public readonly sslCertRemainingLifetime: number;
```

- *Type:* number

---

##### `sslCheckEnabled`<sup>Required</sup> <a name="sslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabled"></a>

```typescript
public readonly sslCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationInsightsStandardWebTestValidationRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---



