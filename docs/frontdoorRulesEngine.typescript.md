# `azurerm_frontdoor_rules_engine`

Refer to the Terraform Registory for docs: [`azurerm_frontdoor_rules_engine`](https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine).

# `frontdoorRulesEngine` Submodule <a name="`frontdoorRulesEngine` Submodule" id="@cdktf/provider-azurerm.frontdoorRulesEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorRulesEngine <a name="FrontdoorRulesEngine" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine azurerm_frontdoor_rules_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngine(scope: Construct, id: string, config: FrontdoorRulesEngineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig">FrontdoorRulesEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig">FrontdoorRulesEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule"></a>

```typescript
public putRule(value: IResolvable | FrontdoorRulesEngineRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts"></a>

```typescript
public putTimeouts(value: FrontdoorRulesEngineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput">frontdoorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName">frontdoorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule"></a>

```typescript
public readonly rule: FrontdoorRulesEngineRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts"></a>

```typescript
public readonly timeouts: FrontdoorRulesEngineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frontdoorNameInput`<sup>Optional</sup> <a name="frontdoorNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput"></a>

```typescript
public readonly frontdoorNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FrontdoorRulesEngineRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FrontdoorRulesEngineTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a> | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frontdoorName`<sup>Required</sup> <a name="frontdoorName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName"></a>

```typescript
public readonly frontdoorName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorRulesEngineConfig <a name="FrontdoorRulesEngineConfig" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineConfig: frontdoorRulesEngine.FrontdoorRulesEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName">frontdoorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frontdoorName`<sup>Required</sup> <a name="frontdoorName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName"></a>

```typescript
public readonly frontdoorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | FrontdoorRulesEngineRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#rule FrontdoorRulesEngine#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FrontdoorRulesEngineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#timeouts FrontdoorRulesEngine#timeouts}

---

### FrontdoorRulesEngineRule <a name="FrontdoorRulesEngineRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineRule: frontdoorRulesEngine.FrontdoorRulesEngineRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition">matchCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]</code> | match_condition block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action"></a>

```typescript
public readonly action: FrontdoorRulesEngineRuleAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#action FrontdoorRulesEngine#action}

---

##### `matchCondition`<sup>Optional</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition"></a>

```typescript
public readonly matchCondition: IResolvable | FrontdoorRulesEngineRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#match_condition FrontdoorRulesEngine#match_condition}

---

### FrontdoorRulesEngineRuleAction <a name="FrontdoorRulesEngineRuleAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineRuleAction: frontdoorRulesEngine.FrontdoorRulesEngineRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader">requestHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader">responseHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]</code> | response_header block. |

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | FrontdoorRulesEngineRuleActionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#request_header FrontdoorRulesEngine#request_header}

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader"></a>

```typescript
public readonly responseHeader: IResolvable | FrontdoorRulesEngineRuleActionResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#response_header FrontdoorRulesEngine#response_header}

---

### FrontdoorRulesEngineRuleActionRequestHeader <a name="FrontdoorRulesEngineRuleActionRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineRuleActionRequestHeader: frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType">headerActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `headerActionType`<sup>Optional</sup> <a name="headerActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType"></a>

```typescript
public readonly headerActionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleActionResponseHeader <a name="FrontdoorRulesEngineRuleActionResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineRuleActionResponseHeader: frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType">headerActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `headerActionType`<sup>Optional</sup> <a name="headerActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType"></a>

```typescript
public readonly headerActionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleMatchCondition <a name="FrontdoorRulesEngineRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineRuleMatchCondition: frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform">transform</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable">variable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}.

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform"></a>

```typescript
public readonly transform: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}.

---

### FrontdoorRulesEngineTimeouts <a name="FrontdoorRulesEngineTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

const frontdoorRulesEngineTimeouts: frontdoorRulesEngine.FrontdoorRulesEngineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorRulesEngineRuleActionOutputReference <a name="FrontdoorRulesEngineRuleActionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader">putResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | FrontdoorRulesEngineRuleActionRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]

---

##### `putResponseHeader` <a name="putResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader"></a>

```typescript
public putResponseHeader(value: IResolvable | FrontdoorRulesEngineRuleActionResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]

---

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader"></a>

```typescript
public resetResponseHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader">responseHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: FrontdoorRulesEngineRuleActionRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a>

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: FrontdoorRulesEngineRuleActionResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a>

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | FrontdoorRulesEngineRuleActionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput"></a>

```typescript
public readonly responseHeaderInput: IResolvable | FrontdoorRulesEngineRuleActionResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRulesEngineRuleAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---


### FrontdoorRulesEngineRuleActionRequestHeaderList <a name="FrontdoorRulesEngineRuleActionRequestHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get"></a>

```typescript
public get(index: number): FrontdoorRulesEngineRuleActionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorRulesEngineRuleActionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>[]

---


### FrontdoorRulesEngineRuleActionRequestHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionRequestHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType">resetHeaderActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderActionType` <a name="resetHeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType"></a>

```typescript
public resetHeaderActionType(): void
```

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput">headerActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType">headerActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerActionTypeInput`<sup>Optional</sup> <a name="headerActionTypeInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput"></a>

```typescript
public readonly headerActionTypeInput: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `headerActionType`<sup>Required</sup> <a name="headerActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType"></a>

```typescript
public readonly headerActionType: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRulesEngineRuleActionRequestHeader | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a> | cdktf.IResolvable

---


### FrontdoorRulesEngineRuleActionResponseHeaderList <a name="FrontdoorRulesEngineRuleActionResponseHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get"></a>

```typescript
public get(index: number): FrontdoorRulesEngineRuleActionResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorRulesEngineRuleActionResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>[]

---


### FrontdoorRulesEngineRuleActionResponseHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionResponseHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType">resetHeaderActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderActionType` <a name="resetHeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType"></a>

```typescript
public resetHeaderActionType(): void
```

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput">headerActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType">headerActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerActionTypeInput`<sup>Optional</sup> <a name="headerActionTypeInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput"></a>

```typescript
public readonly headerActionTypeInput: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `headerActionType`<sup>Required</sup> <a name="headerActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType"></a>

```typescript
public readonly headerActionType: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRulesEngineRuleActionResponseHeader | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a> | cdktf.IResolvable

---


### FrontdoorRulesEngineRuleList <a name="FrontdoorRulesEngineRuleList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get"></a>

```typescript
public get(index: number): FrontdoorRulesEngineRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorRulesEngineRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>[]

---


### FrontdoorRulesEngineRuleMatchConditionList <a name="FrontdoorRulesEngineRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get"></a>

```typescript
public get(index: number): FrontdoorRulesEngineRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrontdoorRulesEngineRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]

---


### FrontdoorRulesEngineRuleMatchConditionOutputReference <a name="FrontdoorRulesEngineRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform">resetTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetTransform` <a name="resetTransform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform"></a>

```typescript
public resetTransform(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable"></a>

```typescript
public resetVariable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput">transformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform">transform</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform"></a>

```typescript
public readonly transform: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRulesEngineRuleMatchCondition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a> | cdktf.IResolvable

---


### FrontdoorRulesEngineRuleOutputReference <a name="FrontdoorRulesEngineRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition">resetMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction"></a>

```typescript
public putAction(value: FrontdoorRulesEngineRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition"></a>

```typescript
public putMatchCondition(value: IResolvable | FrontdoorRulesEngineRuleMatchCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMatchCondition` <a name="resetMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition"></a>

```typescript
public resetMatchCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action"></a>

```typescript
public readonly action: FrontdoorRulesEngineRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: FrontdoorRulesEngineRuleMatchConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: FrontdoorRulesEngineRuleAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: IResolvable | FrontdoorRulesEngineRuleMatchCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRulesEngineRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a> | cdktf.IResolvable

---


### FrontdoorRulesEngineTimeoutsOutputReference <a name="FrontdoorRulesEngineTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer"></a>

```typescript
import { frontdoorRulesEngine } from '@cdktf/provider-azurerm'

new frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FrontdoorRulesEngineTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a> | cdktf.IResolvable

---



